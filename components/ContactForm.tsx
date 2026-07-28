'use client'

import { useState, useRef } from 'react'
import { upload } from '@vercel/blob/client'
import { Paperclip, X, FileText } from 'lucide-react'

const ACCEPTED_TYPES = '.pdf,.jpg,.jpeg,.png,.gif,.webp,.dwg,.dxf,.doc,.docx'
const MAX_FILES = 4
const MAX_SIZE_MB = 20
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024

interface AttachedFile {
  file: File
  url?: string
  error?: string
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'sending' | 'success' | 'error'>('idle')
  const [uploadProgress, setUploadProgress] = useState('')
  const [files, setFiles] = useState<AttachedFile[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? [])
    const remaining = MAX_FILES - files.length
    const toAdd = selected.slice(0, remaining).map((file) => {
      if (file.size > MAX_SIZE_BYTES) {
        return { file, error: `Filen er for stor (maks ${MAX_SIZE_MB} MB)` }
      }
      return { file }
    })
    setFiles((prev) => [...prev, ...toAdd])
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const hasErrors = files.some((f) => f.error)
    if (hasErrors) return

    const form = e.currentTarget
    const data = {
      navn: (form.elements.namedItem('navn') as HTMLInputElement).value,
      epost: (form.elements.namedItem('epost') as HTMLInputElement).value,
      telefon: (form.elements.namedItem('telefon') as HTMLInputElement).value,
      prosjekttype: (form.elements.namedItem('prosjekttype') as HTMLSelectElement).value,
      melding: (form.elements.namedItem('melding') as HTMLTextAreaElement).value,
    }

    try {
      // Upload files
      const uploadedFiles: { name: string; url: string; size: number }[] = []
      const validFiles = files.filter((f) => !f.error)

      if (validFiles.length > 0) {
        setStatus('uploading')
        for (let i = 0; i < validFiles.length; i++) {
          setUploadProgress(`Laster opp fil ${i + 1} av ${validFiles.length}…`)
          const { file } = validFiles[i]
          const blob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          })
          uploadedFiles.push({ name: file.name, url: blob.url, size: file.size })
        }
      }

      setStatus('sending')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, vedlegg: uploadedFiles }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      form.reset()
      setFiles([])
    } catch {
      setStatus('error')
    }
  }

  const isBusy = status === 'uploading' || status === 'sending'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">Navn *</label>
        <input type="text" id="navn" name="navn" required className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="Ditt fulle navn" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">E-post *</label>
          <input type="email" id="epost" name="epost" required className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="din@epost.no" />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">Telefon</label>
          <input type="tel" id="telefon" name="telefon" className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors" placeholder="+47 973 49 273" />
        </div>
      </div>
      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">Prosjekttype</label>
        <select id="prosjekttype" name="prosjekttype" className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white">
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>
      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">Melding *</label>
        <textarea id="melding" name="melding" required rows={5} className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none" placeholder="Beskriv prosjektet ditt kort..." />
      </div>

      {/* File upload */}
      <div>
        <label className="block text-sm font-bold text-brand-black mb-1.5">Vedlegg</label>

        {files.length < MAX_FILES && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-brand-gray rounded-[10px] text-brand-darkgray hover:border-brand-orange hover:text-brand-orange transition-colors text-sm"
          >
            <Paperclip size={16} />
            Legg ved filer
          </button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED_TYPES}
          multiple
          className="hidden"
          onChange={handleFileChange}
        />

        <p className="mt-1.5 text-xs text-brand-darkgray">
          PDF, JPG, PNG, DWG, DXF, DOC, DOCX — maks {MAX_SIZE_MB} MB per fil, opptil {MAX_FILES} filer
        </p>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f, i) => (
              <li key={i} className={`flex items-center gap-3 px-3 py-2 rounded-[8px] text-sm ${f.error ? 'bg-red-50 border border-red-200' : 'bg-brand-lightgray'}`}>
                <FileText size={16} className={f.error ? 'text-red-500 shrink-0' : 'text-brand-orange shrink-0'} />
                <span className="flex-1 truncate text-brand-black">{f.file.name}</span>
                {!f.error && <span className="text-brand-darkgray shrink-0">{formatSize(f.file.size)}</span>}
                {f.error && <span className="text-red-600 shrink-0">{f.error}</span>}
                <button type="button" onClick={() => removeFile(i)} className="shrink-0 text-brand-darkgray hover:text-brand-black transition-colors">
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === 'uploading' && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-[10px] px-4 py-3 text-sm font-medium">
          {uploadProgress}
        </div>
      )}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-[10px] px-4 py-3 text-sm font-medium">
          Takk! Vi har mottatt henvendelsen din og svarer innen 24 timer.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-[10px] px-4 py-3 text-sm font-medium">
          Noe gikk galt. Prøv igjen eller send e-post til post@trondheimbrannkonsult.no
        </div>
      )}

      <button
        type="submit"
        disabled={isBusy || files.some((f) => f.error)}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60"
      >
        {status === 'uploading' ? uploadProgress : status === 'sending' ? 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}

import { useRouter } from 'next/router'

export default function doc() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('https://nekozu-docs.now.sh')}>
      Docs Web
    </button>
  )
}

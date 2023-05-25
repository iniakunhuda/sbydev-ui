import Link from 'next/link'
import LogoImage from '@/public/images/logo.png'
import Image from "next/image"

export default function Logo() {
  return (
    <Image className="relative rounded-full" src={LogoImage} width={200} height={96} alt="Logo" />
  )
}

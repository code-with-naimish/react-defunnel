import { useState } from "react"

const FullImg = (props: {
  src: string,
  alt: string,
  objectContain?: boolean
}) => {
  const [error, setError] = useState<boolean>(false);
  const imgSrc = error ? "/img-placeholder.svg" : (!props?.src || props?.src?.trim().length === 0 ? "/img-placeholder.svg" : props?.src)
  const objectFit = props.objectContain ? 'object-contain' : "object-cover"

  return (
    <img
      loading="lazy"
      onError={() => setError(true)}
      className={` w-full h-full ${objectFit}  `} src={imgSrc} alt={props?.alt} />
  )
}

export default FullImg
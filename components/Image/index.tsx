import React, { FC } from 'react'
import NextImage, { ImageProps } from 'next/image'
type Props = ImageProps
const Image: FC<Props> = (props: Props) => {
  return (
    <NextImage
      {...props}
      loading='lazy'
      placeholder='blur'
      blurDataURL='/icons/loader.gif'
    />
  )
}
export default Image

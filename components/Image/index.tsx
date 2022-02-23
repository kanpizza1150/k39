import React, { FC } from 'react'
import NextImage, { ImageProps } from 'next/image'
type Props = ImageProps
const Image: FC<Props> = (props: Props) => {
  let optimizeProps = {}
  if (
    (props?.width && props?.width >= 40) ||
    (props?.height && props?.height >= 40)
  ) {
    optimizeProps = {
      placeholder: 'blur',
      blurDataURL: '/icons/loader.gif',
    }
  }
  return <NextImage loading="lazy" {...optimizeProps} {...props} />
}
export default Image

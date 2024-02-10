import { useState } from 'react'
import useShowToast from './useShowToast'

export default function usePreviewImg () {
  const [selectedFile, setSelectedFile] = useState(null)
  const showToast = useShowToast()
  const maxFileSizeInBytes = 2 * 1024 * 1024 // 2M

  const handleImgChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      if (file.size > maxFileSizeInBytes) {
        showToast('Error', 'File size must be less that 2M', 'error')
        setSelectedFile(null)
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedFile(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      showToast('Error', 'Please select an image file', 'error')
      setSelectedFile(null)
    }
  }

  return { selectedFile, handleImgChange, setSelectedFile }
}

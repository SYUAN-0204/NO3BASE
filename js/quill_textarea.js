const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['link', 'image'],
    ['clean']
]

const quill = new Quill('#editor-container', {
    theme: 'snow',
    modules: {
        toolbar: {
            container: toolbarOptions,
            handlers: {
                image: imageHandler
            }
        }
    }
})

function imageHandler() {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
        const file = input.files[0]
        if (!file) return

        const formData = new FormData()
        formData.append('image', file)

        try {
            const response = await fetch('/upload-image/', {
                method: 'POST',
                headers: {
                    'X-CSRFToken': getCSRFToken()
                },
                body: formData
            })

            if (!response.ok) {
                alert('圖片上傳失敗')
                return
            }

            const result = await response.json()
            const range = quill.getSelection(true)
            quill.insertEmbed(range.index, 'image', result.url)
            quill.setSelection(range.index + 1)

        } catch (error) {
            alert('圖片上傳錯誤')
            console.error(error)
        }
    }
}

function getCSRFToken() {
    const cookies = document.cookie.split('')
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=')
        if (name === 'csrftoken') return decodeURIComponent(value)
    }
    return ''
}

document.querySelector('form').onsubmit = function () {
    const html = quill.root.innerHTML
    document.querySelector('#hidden-content').value = html
}

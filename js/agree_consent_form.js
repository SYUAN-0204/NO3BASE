document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('agreeCheckbox')
    const submitBtn = document.getElementById('submitBtn')

    checkbox.addEventListener('change', function () {
        submitBtn.disabled = !this.checked
        if (submitBtn.disabled) {
            submitBtn.style.opacity = '0.7'
            submitBtn.style.cursor = 'default'
        }
        else {
            submitBtn.style.opacity = '1'
            submitBtn.style.cursor = 'pointer'
        }
    })
})

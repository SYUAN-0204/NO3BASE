document.addEventListener("DOMContentLoaded", function () {
    const selectSection = document.getElementById('selectSection')
    const selectClass = document.getElementById('selectClass')

    new TomSelect(selectSection, {
        create: false,
        placeholder: '選擇板塊'
    })

    new TomSelect(selectClass, {
        create: false,
        placeholder: '選擇類別'
    })
})

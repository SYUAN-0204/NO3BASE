document.addEventListener("DOMContentLoaded", function () {
    const themeLink = document.getElementById("themeStyleSheet")

    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
        themeLink.href = savedTheme
    }
    else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (prefersDark) {
            themeLink.href = "global_dark.css"
        }
        else {
            themeLink.href = "global_light.css"
        }
    }
})

document.addEventListener("toolBarLoaded", function () {
    const themeLink = document.getElementById("themeStyleSheet")
    const themeButtonIcon = document.getElementById("themeImg")
    const messageImg = document.getElementById("messageImg")
    const noticeImg = document.getElementById("noticeImg")

    if (themeLink.href.includes("light")) {
        themeButtonIcon.src = "Img/Tool_3D5272/moon.png"
        messageImg.src = "Img/Tool_3D5272/message.png"
        noticeImg.src = "Img/Tool_3D5272/notice.png"
    }
    else {
        themeButtonIcon.src = "Img/Tool_B56387/sun.png"
        themeButtonIcon.style.height = "24px"
        messageImg.src = "Img/Tool_B56387/message.png"
        noticeImg.src = "Img/Tool_B56387/notice.png"
    }
})

function toggleTheme() {
    const themeLink = document.getElementById("themeStyleSheet")
    const themeButtonIcon = document.getElementById("themeImg")
    const messageImg = document.getElementById("messageImg")
    const noticeImg = document.getElementById("noticeImg")

    if (themeLink.href.includes("light")) {
        themeLink.href = "global_dark.css"
        localStorage.setItem("theme", "global_dark.css")
        themeButtonIcon.src = "Img/Tool_B56387/sun.png"
        themeButtonIcon.style.height = "24px"
        messageImg.src = "Img/Tool_B56387/message.png"
        noticeImg.src = "Img/Tool_B56387/notice.png"
    }
    else {
        themeLink.href = "global_light.css"
        localStorage.setItem("theme", "global_light.css")
        themeButtonIcon.src = "Img/Tool_3D5272/moon.png"
        messageImg.src = "Img/Tool_3D5272/message.png"
        noticeImg.src = "Img/Tool_3D5272/notice.png"
    }
}
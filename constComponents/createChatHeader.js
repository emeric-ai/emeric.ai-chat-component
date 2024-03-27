import closeChatContainer from './createCloseChatIcon.js'
import createNewChatContainer from './createNewChatIcon.js'

function toggleButtons(hideButton, showButton) {
    hideButton.style.display = 'none';
    showButton.style.display = 'flex';
}

function createChatHeader(chatDiv,chatButton,newChat,headerColor){
    const chatHeader = document.createElement('div');
    chatHeader.id="chatHeader"
    chatHeader.style.width = "94.6%";
    chatHeader.style.display = "flex";
    chatHeader.style.alignItems = "center";
    chatHeader.style.justifyContent = "start";
    chatHeader.style.height = "5%";
    chatHeader.style.borderRadius = "10px 10px 0px 0px";
    chatHeader.style.backgroundColor = headerColor ? headerColor : window.ChatComponentMainColor
    chatHeader.style.color = "white";
    chatHeader.style.padding = "10px";
    chatHeader.style.alignSelf = "flex-start";

    const imageComponent = document.createElement("img")
    imageComponent.src="https://storage.googleapis.com/emeric-logo/eai.png"
    imageComponent.alt="logo"
    imageComponent.title="logo"
    imageComponent.style.width = "60px"
    imageComponent.style.cursor="pointer"

    imageComponent.addEventListener('click', function() {
        const newPageUrl = 'https://emeric.ai/';
        window.open(newPageUrl, '_blank');
    })

    const newChatContainer = createNewChatContainer(headerColor)

    newChatContainer.addEventListener('click', function() {
        newChat()
    })
    
    chatHeader.appendChild(imageComponent)
    chatHeader.appendChild(newChatContainer)
    chatHeader.appendChild(closeChatContainer)

    closeChatContainer.addEventListener('click', function() {
        toggleButtons(chatDiv,chatButton);
    })

    return chatHeader
}

export default createChatHeader
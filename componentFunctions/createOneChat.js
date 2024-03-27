import createCircleImage from "../componentTemplates/circleImage.js"
import dots from "../componentTemplates/dots.js"

let chatTemplate = document.createElement('div');
chatTemplate.style.backgroundColor="#f2f2f2"
chatTemplate.style.color = "black"
chatTemplate.style.borderRadius= "8px"
chatTemplate.style.padding="10px"
chatTemplate.style.fontFamily = "Arial";
chatTemplate.style.fontSize="14px"
chatTemplate.style.fontWeight="500"
chatTemplate.style.wordBreak = "break-word";
chatTemplate.style.overflowWrap = "break-word"; 

let chatInnerContainerTemplate = document.createElement('div');
chatInnerContainerTemplate.style.display="flex"
chatInnerContainerTemplate.style.flexDirection="row"
chatInnerContainerTemplate.style.marginTop = "20px"

function convertTextToHyperlinks(text) {
    const urlRegex = /(\bhttps?:\/\/[^\s]+|\bwww\.[^\s]+)/g;

    return text.replace(urlRegex, function(url) {
        const properUrl = url.startsWith('http') ? url : 'http://' + url;
        return '<a href="' + properUrl + '" target="_blank">' + url + '</a>';
    });
}


function createOneChat(inputChat,chats){
    let chatInnerContainer = chatInnerContainerTemplate.cloneNode(true)
    if(inputChat==="dots"){
        chatInnerContainer.style.maxWidth="90%"
        chatInnerContainer.style.alignSelf = "flex-start"
        chatInnerContainer.style.marginLeft="5px"
        chatInnerContainer.appendChild(createCircleImage().cloneNode(true))
        chatInnerContainer.appendChild(dots)
    }
    else if(inputChat.content.includes("///") && inputChat.role==="assistant"){
        let content=inputChat.split("///")
        let chatInnerContainer2 = chatInnerContainerTemplate.cloneNode(true)
        chatInnerContainer.appendChild(createOneChat({role:"assistant",content:content[0]}))
        chatInnerContainer2.appendChild(createOneChat({role:"assistant2",content:content[1]}))
        return [chatInnerContainer,chatInnerContainer2]

    }
    else{
        chats.push(inputChat)
        let localStorageChats=localStorage.getItem(`emeric-chats-${param1}`)
        if(localStorageChats){
            let obj=JSON.parse(localStorageChats)
            obj.chats.push(inputChat)
            localStorage.setItem(`emeric-chats-${param1}`,JSON.stringify(obj))
        }
        else{
            localStorage.setItem(`emeric-chats-${param1}`,JSON.stringify({chats:chats,time:new Date(),prevChats:[]}))
        }

        let chat = chatTemplate.cloneNode(true)
        chat.innerHTML=convertTextToHyperlinks(inputChat.content)

        if(inputChat.role === "user"){
            chatInnerContainer.style.maxWidth="80%"
            chatInnerContainer.style.alignSelf = "flex-end"
            chatInnerContainer.style.marginRight="5px"
        }
        else if(inputChat.role === "assistant2"){
            chatInnerContainer.style.maxWidth="70%"
            chatInnerContainer.style.alignSelf = "flex-start"
            chatInnerContainer.style.marginLeft = "15.5%"
            chatInnerContainer.style.marginRight="5px"
        }
        else{
            chatInnerContainer.style.maxWidth="80%"
            chatInnerContainer.style.alignSelf = "flex-start"
            chatInnerContainer.style.marginLeft="5px"
            chatInnerContainer.appendChild(createCircleImage().cloneNode(true))
        }
        chatInnerContainer.appendChild(chat)
    }
    return chatInnerContainer
}

export default createOneChat
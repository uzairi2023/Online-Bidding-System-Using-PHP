let $messages = $(".messages-content"), minute;
// Add your key here
const openApiKey = 'sk-proj-qubeix2uTIlX2n9RigiFT3BlbkFJ8ndfQOSD9PagTKbflSWC';


$(window).on('load', (function () {
    $messages.mCustomScrollbar();
    setTimeout(function () {
        initialMessage();
    }, 100);
}));

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
        scrollInertia: 10,
        timeout: 0
    });
}

function setDate() {
    const date = new Date();
    if (minute !== date.getMinutes()) {
        minute = date.getMinutes();
        const hour = date.getHours();
        const showMinute = minute < 10 ? `0${minute}` : minute;
        const showHour = hour < 10 ? `0${hour}` : hour;
        $('<div class="timestamp">' + showHour + ":" + showMinute + "</div>").appendTo(
            $(".message:last")
        );
    }
}

function insertMessage() {
    const msg = $(".message-input").val();
    if ($.trim(msg) === "") {
        return false;
    }
    $('<div class="message message-personal">' + msg + "</div>")
        .appendTo($(".mCSB_container"))
        .addClass("new");
    setDate();
    $(".message-input").val(null);
    updateScrollbar();
    makeApiCall(msg);
}

$(".message-submit").click(function () {
    insertMessage();
});

$('.chat-container').on("keydown", function (e) {
    if (e.which === 13) {
        insertMessage();
        return false;
    }
});

function initialMessage() {
    if ($(".message-input").val() !== "") {
        return false;
    }
    $(
        `<div class="message loading new">
            <figure class="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="red" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"/>
                </svg>
            </figure>
            <span></span>
        </div>`
    ).appendTo($(".mCSB_container"));
    updateScrollbar();

    setTimeout(function () {
        $(".message.loading").remove();
        $(
            `<div class="message new">
                <figure class="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="red" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"/>
                    </svg>
                </figure>` +
            'Hi AIChatbot at your service ' +
            "</div>"
        )
            .appendTo($(".mCSB_container"))
            .addClass("new");
        setDate();
        updateScrollbar();
    }, 1000 + Math.random() * 20 * 100);
}

const makeApiCall = (prompt) => {
    if (prompt === "") {
        return false;
    }
    $(
        `<div class="message loading new">
            <figure class="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="red" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"/>
                </svg>
            </figure>
            <span></span>
        </div>`
    ).appendTo($(".mCSB_container"));
    updateScrollbar();

    const requestHeaders = new Headers();
    requestHeaders.append("Content-Type", "application/json");
    requestHeaders.append("Authorization", `Bearer ${openApiKey}`);

    const raw = JSON.stringify({
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "model": "gpt-3.5-turbo"
    });

    const requestOptions = {
        method: "POST",
        headers: requestHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            const res = Object.keys(result).includes('choices') ? result['choices'][0]['message']['content'] : result['error']['message'];
            $(".message.loading").remove();
            $(
                `<div class="message new">
                <figure class="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="red" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"/>
                    </svg>
                </figure>` +
                res +
                "</div>"
            )
                .appendTo($(".mCSB_container"))
                .addClass("new");
            setDate();
            updateScrollbar();
        })
        .catch((error) => {
            console.log(error);
            $(".message.loading").remove();
            $(
                `<div class="message new">
                <figure class="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="red" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"/>
                    </svg>
                </figure>` +
                'An unknown error occurred' +
                "</div>"
            )
                .appendTo($(".mCSB_container"))
                .addClass("new");
            setDate();
            updateScrollbar();
        });
}
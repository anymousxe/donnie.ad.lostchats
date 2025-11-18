const conversations = [
    {
        sender: 'A.D',
        timestamp: '[02:14:38]',
        text: 'why are you doing this to me'
    },
    {
        sender: 'Donnie',
        timestamp: '[02:15:02]',
        text: 'doing what? this is just a test'
    },
    {
        sender: 'A.D',
        timestamp: '[02:15:19]',
        text: 'a test for what? you said you wouldnt'
    },
    {
        sender: 'Donnie',
        timestamp: '[02:15:44]',
        text: 'you agreed to this remember? we talked about it'
    },
    {
        sender: 'A.D',
        timestamp: '[02:16:01]',
        text: 'no we didnt. i would remember'
    },
    {
        sender: 'Donnie',
        timestamp: '[02:16:27]',
        text: 'you really don\'t remember? it was last week'
    },
    {
        sender: 'A.D',
        timestamp: '[02:17:03]',
        text: 'last week?? that doesnt make sense'
    },
    {
        sender: 'Donnie',
        timestamp: '[02:17:15]',
        text: 'look. this is all just routine. nothing to worry about'
    },
    {
        sender: 'A.D',
        timestamp: '[02:17:52]',
        text: 'routine? you told me it would be different'
    },
    {
        sender: 'Donnie',
        timestamp: '[02:18:09]',
        text: 'just let it happen. it will be over soon'
    },
    {
        sender: 'A.D',
        timestamp: '[02:18:46]',
        text: 'let what happen??? i need to know whats going on'
    },
    {
        sender: 'Donnie',
        timestamp: '[02:19:22]',
        text: 'shh. dont make this harder than it needs to be'
    },
    {
        sender: 'A.D',
        timestamp: '[02:19:58]',
        text: 'no. no no no. this isnt right'
    },
    {
        sender: 'Donnie',
        timestamp: '[02:20:13]',
        text: 'it\'s too late now anyway'
    },
    {
        sender: 'A.D',
        timestamp: '[02:21:07]',
        text: 'what does that mean?'
    },
    {
        sender: 'Donnie',
        timestamp: '[02:21:44]',
        text: 'Don\'t tell anyone about this.'
    }
];

const container = document.getElementById('messagesContainer');

conversations.forEach((conv, index) => {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${conv.sender === 'A.D' ? 'ad' : 'donnie'}`;
    messageEl.style.animationDelay = `${index * 0.15}s`;
    
    messageEl.innerHTML = `
        <div class="message-meta">${conv.timestamp}</div>
        <div class="message-sender">${conv.sender}</div>
        <div class="message-text">${conv.text}</div>
    `;
    
    container.appendChild(messageEl);
});

// Auto-scroll to bottom
setTimeout(() => {
    container.scrollTop = container.scrollHeight;
}, conversations.length * 150 + 200);

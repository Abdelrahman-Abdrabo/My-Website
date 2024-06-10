document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.getElementById('terminal-output');
    const commandInput = document.getElementById('command-input');

    const blogLinks = {
        'Cracking subnetting': 'https://abdrabo-ploit.hashnode.dev/cracking-subnetting',
        'Network Reconnaissance': 'https://abdrabo-ploit.hashnode.dev/network-reconnaissance'
    };

    const commands = {
        help: 'Available commands: whoami, cv, blog, contact, behance, help, ls, clear',
        whoami: 'Hi there, I am Abd El-Rahman Ahmed. I am a highly motivated and quick-learning student pursuing a career in cybersecurity engineering. I have a strong foundation in Linux, network, Python, Java, C++, and C#, and I am eager to learn more about AI and machine learning. I am also a passionate CTF player with strong problem-solving, analytical, and teamwork skills.',
        cv: `
Education
Fayoum University, Computer Engineering and systems, 2020 - 2025
-------------------------------------------
Licenses & Certifications
- Cybrary Network Fundamentals
- Cybrary Introduction to IT & Cybersecurity
- Sololearn HTML
- Sololearn Python Developer
- Cybrary Intro to Python
- NDG Linux Unhatched
- Sololearn Introduction to SQL
- TryHackMe Badge || cat linux.txt
- Great Learning || Linux
- Sololearn || SQL Intermediate
- Great Learning || Introduction to Cryptography
- Touch Typing - Typing
- VEB || Cybersecurity Track - VEP - Volunteers Empowerment Program
- Udemy | Bash Scripting for Linux Security
- Udemy | Applied Cryptography with python
- Udemy | Nmap Advanced Techniques
- LetsDefend | Network Cable
- Cybrary | Network Reference Models
- Netriders | security+ SY0-601
--------------------------------------------------
Skills
- Security
- Wireshark
- Nmap
- Vulnerability Assessment
- Negotiation
- Communication
- Bash
- 10-Key Typing
- Cryptography
- SQL
`,
        blog: 'Opening Hashnode Blog...',
        contact: 'Email: abdelrahmanabdrabo123@gmail.com\nLinkedIn: linkedin.com/in/abd-el-rahman-ahmed-abdrabo ',
        linkedin: 'Opening Linkedin profile...',
        clear: '',
        behance: 'Opening Behance profile...',
        ls: 'whoami, cv, blog, contact, behance'
    };

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim().toLowerCase();
            const commandElement = document.createElement('span');
            commandElement.classList.add('command-output');

            if (command in commands) {
                if (command === 'clear') {
                    terminalOutput.innerHTML = '';
                } else if (command === 'behance') {
                    window.open('https://www.behance.net/b3f09b09', '_blank');
                    commandElement.textContent = commands[command];
                    terminalOutput.appendChild(commandElement);
                }else if(command === 'blog'){
                    window.open('https://abdrabo-ploit.hashnode.dev/', '_blank');
                    commandElement.textContent = commands[command];
                    terminalOutput.appendChild(commandElement);
                } else if (command === 'linkedin'){
                    window.open('https://www.linkedin.com/in/abd-el-rahman-ahmed-abdrabo', '_blank');
                    commandElement.textContent = commands[command];
                    terminalOutput.appendChild(commandElement);
                }
                else {
                    commandElement.textContent = commands[command];
                    terminalOutput.appendChild(commandElement);
                }
            } else if (command in blogLinks) {
                window.open(blogLinks[command], '_blank');
            } 
            else if (command == ""){

            }
            else {
                commandElement.textContent = `Command not found: ${command}`;
                terminalOutput.appendChild(commandElement);
            }
            terminalOutput.innerHTML += `\nuser@website:~$ `;
            commandInput.value = '';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;

            // Remove the additional blank line
           if (terminalOutput.innerHTML.endsWith('user@website:~$ \n')) {
                terminalOutput.innerHTML = terminalOutput.innerHTML.slice(0, -14);
            }
        }
    });

    terminalOutput.innerHTML += `\nuser@website:~$ `;
});

FROM kalilinux/kali-rolling
RUN apt update 
RUN apt upgrade -y 
RUN apt install git -y 
RUN apt-get install curl -y 
RUN apt install -y ffmpeg opus-tools bpm-tools 
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash -
RUN apt install nodejs -y
RUN git clone https://github.com/Krakinz/Mizuki.git
RUN cd Mizuki
WORKDIR /Mizuki
RUN npm i --force
RUN npm audit fix --force
CMD node 🍁爪𝖎𝖟𝖚ӄ𝖎™.js
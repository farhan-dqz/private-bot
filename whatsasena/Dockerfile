FROM fusuf/whatsasena:latest

RUN git clone https://saidalisaid2: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@github.com/saidalisaid2/private-bot /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

FROM fusuf/whatsasena:latest

RUN git clone https://saidalisaid2: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@github.com/saidalisaid2/private-bot /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

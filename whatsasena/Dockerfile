FROM fusuf/whatsasena:latest

RUN git clone https://saidalisaid2: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@github.com/saidalisaid2/LiyaMol /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

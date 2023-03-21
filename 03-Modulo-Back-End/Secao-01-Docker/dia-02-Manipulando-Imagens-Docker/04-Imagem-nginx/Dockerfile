FROM nginx
COPY ./index.html /usr/share/nginx/html
EXPOSE 80
WORKDIR /usr/share/nginx/html
RUN ls 
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", 'daemon off;' ]
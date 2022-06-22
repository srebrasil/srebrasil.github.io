FROM jekyll/jekyll:3.8
WORKDIR /srv/jekyll
ADD . /srv/jekyll/
RUN bundle
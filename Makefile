.PHONY: clean build run

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)
BUILD_HASH = $(Build.SourceVersion) 
clean:
	rm -rf node_modules dist .cache
	rm -f yarn.lock
	#yarn cache clean module-a
	#yarn cache clean module-b

local: clean 
	yarn

run:
	webpack-dev-server --mode development --watch --open
	#parcel public/index.html

build: 
	#parcel build public/index.html
	webpack --mode production

build-ci: 
	#parcel build public/index.html
	webpack --mode production --output-public-path exc-app-${BUILD_HASH}

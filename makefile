BUILD=lib
SRC=src
NPM=npm

build: 
	rm -rf $(BUILD)
	$(NPM) run build
	cp -rf $(SRC)/templates $(BUILD)

install-local: build
	$(NPM) rm -g speedeck && $(NPM) i -g
	rm -rf demo/**

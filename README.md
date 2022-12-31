# image-processing-api
# Script

* Install: npm install

* Build: npm run build

* Unit Test: npm run test

* Start The Server: npm run start

# Usage

The server will listen on port 3000

## End point to resize images

http://localhost:3000/api/image-processing

> Expected query arguments are:
> filename: The name of the image. Available image names are:

   * encenadaport
   * fjord
   * icelandwaterfall
   * palmtunnel
   * santamonica
   
> height: The height of the image after resizing.

> width: The width of the image after resizing.

An example of a correct endpoint call would be:

http://localhost:3000/api/image-processing?filename=palmtunnel&width=350&height=500

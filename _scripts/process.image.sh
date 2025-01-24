#!/bin/bash

process_images () {
./_scripts/subprocess.image.sh "assets/static/quantum_news/$1/source/" "assets/static/quantum_news/$1/output/"
}


process_images 2022
process_images 2023
process_images 2024
process_images 2025
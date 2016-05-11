#!/bin/bash
#
# Script to perform a Jekyll deploy for moonlightradio.xyz
#

JEKYLL_DEST=/var/www/moonlightradio.xyz/public_html
WWW_ROOT=/var/www

echo -e "Building Jekyll site to ${JEKYLL_DEST}..."
jekyll build -d $JEKYLL_DEST

# Test if jekyll build was succesfull
RESULT_JEKYLL=$?
if [ $RESULT_JEKYLL -ne 0 ]; then
  # Exit if build failed
  echo -e "\nDeployment failed: Jekyll build failed."
  exit 1
fi

echo -e \
"\nJekyll build successful. Don't forget to run \`sudo chmod -R 755 /var/www\` \n\
to fix file permissions."
exit

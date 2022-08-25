if [[ "${CI_BRANCH}" != "main" && "${CI_BRANCH}" != "develop" ]]; then
    exit 0
fi

publish() {
    docker run \
           --rm \
           --volume "$(pwd):/home/akvo-react-form-editor" \
           --workdir "/home/akvo-react-form-editor" \
           --entrypoint /bin/sh \
           node:lts-alpine3.13 -c "npm config set '//registry.npmjs.org/:_authToken' ${NPM_PUBLISH_TOKEN} && npm publish --access public"
}

check_version() {
    LAST_VERSION=$(npm info 'akvo-react-form-editor' version)
    NEW_VERSION=$(echo "$CI_BRANCH" | sed "s/v//g")
    if [[ "$LAST_VERSION" == "$NEW_VERSION" ]]; then
        echo "PUBLISHING $CI_BRANCH"
        publish
    else
        echo "SKIP PUBLISHING $CI_COMMIT"
    fi
}

if [[ "${CI_TAG:=}" =~ v.* ]]; then
    check_version
    exit 0
fi

echo "$CI_COMMIT - NOTHING TO PUBLISH"

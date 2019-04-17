#!/bin/bash
curl -o assets/qrlwallet.json "https://api.github.com/repos/theQRL/qrl-wallet/releases/latest"

# Remove everything but browser_download_url and assets
function cleanup {
	for var in "$@"
	do
	    sed -i "/\"$var\":/d" "assets/qrlwallet.json"
	done
}

# cleanup "events" "login" "html_url" "starred_url" "gravatar_id" "avatar_url" "content_type" "repos_url" "created_at" "url" "target_commitish" "assets_url" "upload_url" "label" "following_url"
# cleanup "updated_at" "zipball_url" "tarball_url" "body" "id" "name" "node_id" "followers_url" "gists_url"
# cleanup "subscriptions_url" "organizations_url" "received_events_url" "type" "site_admin" "events_url" "published_at" "prerelease" "draft" "download_count" "size" "state"


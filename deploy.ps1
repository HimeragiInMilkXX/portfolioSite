Write-Host "Building"
npm.cmd run build

Write-Host "Uploading to S3..."
aws s3 sync ./dist s3://kiperformra2425 --delete

Write-Host "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id E1OZD964ERF7RV --paths "/*"

Write-Host "Done! Site updated."
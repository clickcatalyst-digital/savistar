# login
docker login

# delete cachin for cleanups
# docker builder prune -a

# Build & push Docker image
echo "🐳 Building and pushing Docker image..."
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  --build-arg NEXT_PUBLIC_GTAG_ID="G-1Q3BC315WW" \
  -t rocksta91/savistar-app:latest \
  --push .
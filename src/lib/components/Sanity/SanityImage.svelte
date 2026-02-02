<script>
    export let image_ref

    // Format image reference
    var img_ref = image_ref.replace("image-","").replace("-jpg",".jpg").replace("-png",".png")
</script>

<img src="https://cdn.sanity.io/images/94cqfhj8/production/{img_ref}" alt="">
<script>
	export let title = 'Trust, Accountability and Inclusion Collaborative';
	export let description =
		'The Trust, Accountability, and Inclusion Collaborative - Funders for Participatory Governance is a network of funders committed to advancing a world where power and resources are distributed more equitably, communities are informed and empowered, and governments and the corporate sector act with integrity for the good of people and planet.';
	export let img = 'https://taicollaborative.org/seo2.png';
	export let url = '/';
	export let type = 'website';
</script>

<title>{title}</title>
<meta name="description" content={description} />

<meta property="og:url" content="https://taicollaborative.org{url}" />
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={img} />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="taicollaborative.org" />
<meta property="twitter:url" content="https://taicollaborative.org{url}" />

<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={img} />

<script>
	export let title = 'Trust, Accountability and Inclusion Collaborative';
	export let description =
		'The Trust, Accountability and Inclusion Collaborative (TAI) is a donor collaborative working toward a democratic world where power and resources are more equally distributed; people are informed and empowered, governments and the corporate sector are open and responsive, and collective action advances the public good.';
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

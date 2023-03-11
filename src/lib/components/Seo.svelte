<script>
	export let title = 'Transparency & Accountability Initiative';
	export let description =
		'The Transparency and Accountability Initiative (TAI) is a donor collaborative working toward a democratic world where power and resources are more equally distributed; people are informed and empowered, governments and the corporate sector are open and responsive, and collective action advances the public good.';
	export let img = 'https://www.transparency-initiative.org/seo.jpg';
    export let url = '/';
    export let type = 'website';
</script>

<title>{title}</title>
<meta name="description" content={description} />

<meta property="og:url" content="https://www.transparency-initiative.org{url}" />
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={img} />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="transparency-initiative.org" />
<meta property="twitter:url" content="https://www.transparency-initiative.org{url}" />

<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={img} />

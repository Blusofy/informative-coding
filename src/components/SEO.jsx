/**
 * Date:24/04/2021
 * Author: Muhammad Minhaj
 * Title: Website Seo
 * Description: This is a seo component for website
 * * */

const data = {
    title: 'Informative Coding - ইনফরমেটিভ কোডিং । বাংলায় প্রোগ্রামিং শিখুন',
    description:
        'ইনফরমেটিভ কোডিং হচ্ছে একটি অলাভজনক সংস্থা। যার উদ্দেশ্য বাংলায় প্রোগ্রামিং সম্পর্কিত বিষয় সমূহের বৃহৎ সংস্থান গড়ে তোলে মানুষ কে শিখার সুযোগ করে দেওয়া। ইনফরমেটিভ কোডিং এর কনটেন্ট ইউটুব এবং ওয়েবসাইটের মাধ্যমে প্রকাশিত হয়।',
    keywords:
        'Informative Coding, Learn Programming, Data Structures, Algorithms, JavaScript, Programming Languages,ইনফরমেটিভ কোডিং, প্রোগ্রামিং,ডাটা স্ট্রাকচার,এলগোরিদম,পাইথন ,জাভাস্ক্রিপ্ট,সি। ',
    url: 'https://informativecoding.github.io',
    altForImage: 'Informative Coding - ইনফরমেটিভ কোডিং । বাংলায় প্রোগ্রামিং শিখুন',
    siteName: 'informativecoding.github.io',
    fbAppId: '3242641772502117',
    twitterSiteUsername: '@InformativeCode',
    author: 'Muhammad Minhaj',
    image: 'https://blusofy.github.io/informative-coding/static/logo.png',
    favicon: 'https://blusofy.github.io/informative-coding/static/favicon.ico',
};

const SEO = () => (
    <>
        <title>{data.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={data.description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={data.keywords} />
        <meta name="author" content={data.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content="https://informativecoding.github.io/static/logo.png" />
        <meta name="twitter:creator" content={data.twitterSiteUsername} />
        <meta name="twitter:image:alt" content={data.altForImage} />
        <meta name="twitter:site" content={data.twitterSiteUsername} />

        {/* Open Graph */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
        <meta property="og:url" content={data.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={data.siteName} />
        <meta property="fb:app_id" content={data.fbAppId} />
        <link rel="canonical" href={data.url} />
        <link rel="icon" type="image/png" sizes="48x48" href={data.favicon} />
    </>
);

export default SEO;

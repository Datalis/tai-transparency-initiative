export const parseTwitterText = (text: string) => {
    let res = text;
    res = res.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
    res = res.replace(
        /#(\w+)/g,
        '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>'
    );
    res = res.replace(/@(\w+)/g, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');

    return res;
};
function truncateString(str,num) {
    return `${str.slice(0,num)}${str.length > num ? '...' : ''}`;
}
const pinStyle = { 
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '20px solid green'
}

const pinStyleHover = { 
    ...pinStyle, 
    borderTop: '20px solid red',
    color: 'white'
}

const bubbleStyleHover = { 
    // talk-bubble
    margin: '2px',
    display: 'inline-block',
    position: 'relative',
	width: '70px',
	height: 'auto',
    backgroundColor: '#9DB5B2',
    //border
    border: '2px solid #FFFFFF',
    //round
    borderRadius: '20px'
}

const bubbleStyle = { 
    ...bubbleStyleHover,
    visibility: 'hidden'
}

export {pinStyle, pinStyleHover, bubbleStyleHover, bubbleStyle};
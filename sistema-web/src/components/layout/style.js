const defaultColors = {
	left: "#141c25",
	sectionColor: "#616a77",
	secItem: "#fff",
	selItem: "#40bed3",
	catItem: "#818797",
	right: '#0d171f',
}

const defaultStyle = {
  container: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    fontFamily: 'Averta, sans-serif'
  },
  leftColumn: {
    flex: '0 0 250px',
    minHeight: '100%',
    background: '#141c25',
    padding: '50px'
  },
  sectionWrapper: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 100px)'
  },
  section: {},
  sectionName: {
    textTransform: 'uppercase',
    color: '#616a77',
    fontWeight: 'lighter',
    margin: '30px 0'
  },
  sectionItem: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
    margin: '20px 0',
    cursor: 'pointer'
  },
  selectedItem: {
    paddingLeft: '47px',
    marginLeft: '-50px',
    borderLeft: '3px solid #40bed3',
    color: '#40bed3'
  },
  catItem: {
    color: '#818797',
    fontSize: '13px',
    cursor: 'pointer'
  },
  catItemSel: {
    color: '#40bed3'
  },
  rightColumn: {
    flex: '1 1 auto',
    minHeight: '100%',
    background: '#0d171f',
    padding: '50px 20px',
    color: '#fff',
  }
}


export const styles = colors => {
	colors = {...defaultColors, ...colors}
	var style = {
		...defaultStyle,
	  leftColumn: {
	  	...defaultStyle.leftColumn,
		background: colors.left,
	  },
	  sectionName: {
	  	...defaultStyle.sectionName,
	    color: colors.sectionColor,
	  },
	  sectionItem: {
	  	...defaultStyle.sectionItem,
	    color: colors.secItem,
	  },
	  selectedItem: {
	  	...defaultStyle.sectionItem,
	  	...defaultStyle.selectedItem,
	    borderLeft: '3px solid ' + colors.selItem,
	    color: colors.selItem
	  },
	  catItem: {
	  	...defaultStyle.sectionItem,
	  	...defaultStyle.catItem,
	    color: colors.catItem,
	  },
	  catItemSel: {
	  	...defaultStyle.sectionItem,
	  	...defaultStyle.selectedItem,
	  	...defaultStyle.catItem,
	  	...defaultStyle.catItemSel,
	  	color: colors.selItem,
	  },
	  rightColumn:{
	  	...defaultStyle.rightColumn,
	    background: colors.right,
	  }
	}

	return style;
}
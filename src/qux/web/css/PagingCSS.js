import Logger from '../../core/Logger'

export default class PaginCSS {

    constructor(cssFactory) {
        Logger.log(1, 'PaginCSS.constructor()')
        this.cssFactory = cssFactory
    }

    run (selector, style, widget) {
        let result = ''
        result += selector + ' {\n'
        result += this.cssFactory.getPosition(widget, screen);
        result += '}\n\n'


        result += selector + ' .qux-paging-item {\n'
        result += `  width:${style.fontSize * 2}px;\n`
        result += `  background:${style.background};\n`
        result += this.cssFactory.getStyleByKey(style, widget, this.cssFactory.textProperties)
        result += this.cssFactory.getStyleByKey(style, widget, this.cssFactory.borderProperties)
        result += '}\n\n'


        if (widget.hover) {
            let hover = widget.hover
            result += selector + ' .qux-paging-item:hover {\n'
            result += `  background:${hover.background};\n`
            result += this.cssFactory.getStyleByKey(hover, widget, this.cssFactory.textProperties)
            result += this.cssFactory.getStyleByKey(hover, widget, this.cssFactory.borderProperties)
            result += '}\n\n'
        }

        if (widget.active) {
            let active = widget.active
            result += selector + ' .qux-paging-item.qux-paging-item-active {\n'
            result += `  background:${active.background};\n`
            result += this.cssFactory.getStyleByKey(active, widget, this.cssFactory.textProperties)
            result += this.cssFactory.getStyleByKey(active, widget, this.cssFactory.borderProperties)
            result += '}\n\n'
        }
     

        return result
    }
}
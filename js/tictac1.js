debugger
console.log('Hello frontend');

var ElementUtils = {
      computeElementWidth: function(selector) {
        var styleText = this.getStyleText('.cell');
        var ml = this.grabStyle(styleText, 'margin-left') || 0;
        var mr = this.grabStyle(styleText, 'margin-right') || 0;
        var pl = this.grabStyle(styleText, 'padding-left') || 0;
        var pr = this.grabStyle(styleText, 'padding-right') || 0;
        var w = this.grabStyle(styleText, 'width') || 0;
        return ml + pl + w + pr + mr;
      },
      findCssRule: function(styleText, rule) {
        var searchIndex = styleText.indexOf(rule);
        var endIndex = styleText.indexOf(';', searchIndex);
        var startIndex = searchIndex + rule.length + 1;
        if (startIndex < endIndex && startIndex > -1) {
          return styleText.substring(startIndex, endIndex).trim();
        }
        return undefined;
      },
      grabStyle: function(styleText, rule) {
        var rule = this.findCssRule(styleText, rule);
        if (rule) {
          if (rule.indexOf('px') > -1) {
            return this.parseNumber(rule);
          }
        }
        return undefined;
      },
      getStyleText: function(selector) {
        var styleSheets = document.styleSheets[0];
        var classes = styleSheets.rules || styleSheets.cssRules;
        for (var x = 0; x < classes.length; x++) {
          var curr = classes[x];
          if (curr.selectorText === selector) {
            return curr.cssText ? curr.cssText : curr.style.cssText;
          }
        }
        return '';
      },
      parseNumber: function(value) {
        var match = value.match(/\d+/);
        return match.length > 0 ? parseInt(match[0], 10) : 0;
      }
    };

    var TableUtil = {
      createTable: function(rows, cols) {
        var tableEl = this.createEl('DIV', 'table');
        for (var row = 0; row < rows; row++) {
          this.createRow(tableEl, row, cols);
        }
        tableEl.style.width = this.calculateTableWidth(cols);
        return tableEl;
      },
      createRow: function(tableEl, row, cols) {
        var rowEl = this.createEl('DIV', 'row');
        for (var col = 0; col < cols; col++) {
          this.createCol(rowEl, col);
        }
        tableEl.appendChild(rowEl);
      },
      createCol: function(rowEl, col) {
        rowEl.appendChild(this.createEl('DIV', 'cell'));
      },
      createEl: function(tagName, className, innerHTML) {
        var el = document.createElement(tagName);
        el.className = className;
        return el;
      },
      calculateTableWidth : function(cols) {
        var elWidth = ElementUtils.computeElementWidth('.cell');
        return ((elWidth + 1) * cols) + 'px';
      }
    };

    var el = document.getElementById('TableBox');
    el.appendChild(TableUtil.createTable(8, 12));

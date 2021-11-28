export type Scheme = 'dark' | 'mirage'

export default (scheme: Scheme, bordered: boolean) => {
  return {
    'type': (scheme === 'dark' || scheme === 'mirage') && 'dark',
    'semanticHighlighting': true,
    'semanticTokenColors': {
      'enumMember': {
        'foreground': '#2c6acb',
      },
      'variable.constant': {
        'foreground': '#ab5454',
      },
      'variable.defaultLibrary': {
        'foreground': '#ad5ffb',
      },
    },
    'colors': {
      'foreground': '#ffffff',
      'focusBorder': '#519555',
      'progressBar.background': '#35822f',
      'selection.background': '#519555',
      'scrollbar.shadow': '#1b2034',

      'activityBar.foreground': '#519555',
      'activityBar.background': '#0b0e1c',
      'activityBar.activeBackground': '#0b0e1c',
      'activityBar.inactiveForeground': '#4f5675',
      'activityBar.border': bordered ? '#313858' : '#0b0e1c',
      'activityBarBadge.background': '#519555',

      'sideBar.background': '#131628',
      'sideBar.foreground': '#5c6073',
      'sideBar.border': bordered ? '#313858' : '#0b0e1c',

      'sideBarSectionHeader.background': '#212641',

      'list.inactiveSelectionBackground': '#222236',
      'list.hoverBackground': '#222236',
      'list.activeSelectionBackground': '#35822f6e',
      'list.highlightForeground': '#519555',
      'list.dropBackground': '#101424',
      'list.focusBackground': '#35822f6e',

      'tree.indentGuidesStroke': '#1b2136',

      'statusBar.background': '#0b0e1c',
      'statusBar.debbugingBackground': '#f786337c',
      'statusBar.noFolderBackground': '#222236',
      'statusBar.border': bordered ? '#313858' : '#0b0e1c',

      'statusBarItem.remoteBackground': '#519555',

      'titleBar.inactiveBackground': '#0b0e1c',
      'titleBar.inactiveForeground': '#8f8f96',
      'titleBar.activeBackground': '#222236',
      'titleBar.border': bordered ? '#313858' : '#0b0e1c',

      'menubar.selectionBackground': '#2f2f41',

      'menu.background': '#0b0e1c',
      'menu.selectionBackground': '#519555',
      'menu.separatorBackground': '#2f2f41',
      'menu.border': bordered ? '#313858' : '#0b0e1c',

      'button.background': '#519555',
      'button.hoverBackground': '#58a75d',
      'button.secondaryBackground': '#2f2f41',
      'button.secondaryHoverBackground': '#3e3e56',

      'textLink.foreground': '#519555',

      'input.background': '#2f2f41',
      'input.placeholderForeground': '#b6b6b6',

      'inputOption.activeBackground': '#519555',
      'inputOption.activeBorder': '#519555',

      'panel.background': '#0b0e1c',
      'panel.border': bordered ? '#313858' : '#0b0e1c',

      'panelTitle.activeBorder': '#519555',

      'terminalCursor.background': '#519555',

      'badge.background': '#2f2f41',

      'terminal.selectionBackground': '#2f2f4144',
      'terminal.border': bordered ? '#313858' : '#0b0e1c',

      'terminal.ansiWhite': '#777676d3',
      'terminal.ansiBrightWhite': '#ececec',
      'terminal.ansiBlack': '#060606',
      'terminal.ansiBrightBlack': '#474242',
      'terminal.ansiBlue': '#395e86',
      'terminal.ansiBrightBlue': '#68a9f2',
      'terminal.ansiCyan': '#2a7082',
      'terminal.ansiBrightCyan': '#4fdcff',
      'terminal.ansiGreen': '#309452',
      'terminal.ansiBrightGreen': '#5fa78a',
      'terminal.ansiMagenta': '#9f439f',
      'terminal.ansiBrightMagenta': '#ec55ec',
      'terminal.ansiRed': '#9b3737',
      'terminal.ansiBirghtRed': '#e45e5e',
      'terminal.ansiYellow': '#909045',
      'terminal.ansiBirghtYellow': '#e2e22d',

      'editorGroupHeaderBackground': '#0b0e1c',
      'editorGroupHeaderBorder': bordered ? '#313858' : '#0b0e1c',

      'tab.border': bordered ? '#313858' : '#0b0e1c',
      'tab.activeBackground': '#2f2f41',
      'tab.inactiveBackground': '#222236',
      'tab.hoverBackground': '#2f2f41',
      'tab.activeBorderTop': '#35822f',

      'breadcrumb.background': '#0b0e1c',
      'breadcrumb.focusForeground': '#519555',

      'editorGroupHeader.border': bordered ? '#313858' : '#0b0e1c',

      'scrollbarSlider.background': '#222236',
      'scrollbarSlider.hoverBackground': '#33334f',
      'scrollbarSlider.activeBackground': '#33334f',

      'editorWidget.foreground': '#c2c2c2',
      'editorWidget.background': '#0b0e1c',
      'editorWidget.resizeBorder': bordered ? '#313858' : '#0b0e1c',

      'pickerGroup.border': '#35822f',
      'pickerGroup.foreground': '#35822f',

      'debugToolBar.background': '#0b0e1c',
      'debugToolBar.border': bordered ? '#313858' : '#0b0e1c',

      'notifications.background': '#0b0e1c',
      'notifications.border': bordered ? '#313858' : '#0b0e1c',

      'notificationToast.border': bordered ? '#313858' : '#0b0e1c',

      'notificationCenterHeader.background': '#14192c',
      'notificationCenter.border': bordered ? '#313858' : '#0b0e1c',

      'editor.background': '#0b0e1c',
      'editor.selectionBackground': '#35822f6e',
      'editor.findRangeHighlightBackground': '#1e2236',
      'editor.wordHighlightStrongBackground': '#35822f6e',

      'editorLineNumber.foreground': '#494d64',
      'editorLineNumber.activeForeground': '#8c92b4',

      'editorLink.activeForeground': '#35822f',

      'editorRuler.foreground': '#2c2f45',

      'editorGutter.background': '#0b0e1c',
      'editorGutter.modifiedBackground': '#327d92',
      'editorGutter.addedBackground': '#6aa326',
      'editorGutter.deletedBackground': '#9d2b2b',

      'editorGroup.border': bordered ? '#313858' : '#0b0e1c',

      'diffEditor.insertedTextBackground': '#6cc4301e',
      'diffEditor.removedTextBackground': '#a5333338',
      'diffEditor.border': bordered ? '#313858' : '#0b0e1c',

      'editorMarkerNavigation.background': '#0b0e1c',

      'editorSuggestWidget.background': '#0b0e1c',
      'editorSuggestWidget.border': bordered ? '#313858' : '#0b0e1c',
      'editorSuggestWidget.foreground': '#7a829d',
      'editorSuggestWidget.highlightForeground': '#35822f',
      'editorSuggestWidget.selectedBackground': '#35822f6e',

      'editorHoverWidget.background': '#0b0e1c',
      'editorHoverWidget.border': bordered ? '#313858' : '#0b0e1c',

      'peekView.border': '#35822f',
      'peekViewTitle.background': '#222236',
      'peekViewResult.background': '#0b0e1c',

      'peekViewEditor.background': '#171626',
      'peekViewEditorGutter.background': '#101019',

      'peekViewEditor.matchHighlightBackground': '#40583899',
      'peekViewEditor.matchHighlightBorder': '#396b276e',
      'peekViewResult.matchHighlightBackground': '#35822f6e',
    },
    'tokenColors': [
      {
        'name': 'unison punctuation',
        'scope':
          'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'haskell variable generic-type',
        'scope': 'variable.other.generic-type.haskell',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'haskell storage type',
        'scope': 'storage.type.haskell',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'support.variable.magic.python',
        'scope': 'support.variable.magic.python',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'punctuation.separator.parameters.python',
        'scope':
          'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'variable.parameter.function.language.special.self.python',
        'scope': 'variable.parameter.function.language.special.self.python',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'storage.modifier.lifetime.rust',
        'scope': 'storage.modifier.lifetime.rust',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'support.function.std.rust',
        'scope': 'support.function.std.rust',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'entity.name.lifetime.rust',
        'scope': 'entity.name.lifetime.rust',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'variable.language.rust',
        'scope': 'variable.language.rust',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'support.constant.edge',
        'scope': 'support.constant.edge',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'regexp constant character-class',
        'scope': 'constant.other.character-class.regexp',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'regexp operator.quantifier',
        'scope': 'keyword.operator.quantifier.regexp',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'punctuation.definition',
        'scope': 'punctuation.definition.string.begin,punctuation.definition.string.end',
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'Text',
        'scope': 'variable.parameter.function',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Comment Markup Link',
        'scope': 'comment markup.link',
        'settings': {
          'foreground': '#494646',
        },
      },
      {
        'name': 'markup diff',
        'scope': 'markup.changed.diff',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'diff',
        'scope':
          'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'inserted.diff',
        'scope': 'markup.inserted.diff',
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'deleted.diff',
        'scope': 'markup.deleted.diff',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'c++ function',
        'scope': 'meta.function.c,meta.function.cpp',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'c++ block',
        'scope':
          'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'js/ts punctuation separator key-value',
        'scope': 'punctuation.separator.key-value',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'js/ts import keyword',
        'scope': 'keyword.operator.expression.import',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'math js/ts',
        'scope': 'support.constant.math',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'math property js/ts',
        'scope': 'support.constant.property.math',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'js/ts variable.other.constant',
        'scope': 'variable.other.constant',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'java type',
        'scope': ['storage.type.annotation.java', 'storage.type.object.array.java'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'java source',
        'scope': 'source.java',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'java modifier.import',
        'scope':
          'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'java modifier.import',
        'scope': 'meta.method.java',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'java modifier.import',
        'scope': 'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'java instanceof',
        'scope': 'keyword.operator.instanceof.java',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'java variable.name',
        'scope': 'meta.definition.variable.name.java',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'operator logical',
        'scope': 'keyword.operator.logical',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'operator bitwise',
        'scope': 'keyword.operator.bitwise',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'operator channel',
        'scope': 'keyword.operator.channel',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'support.constant.property-value.scss',
        'scope': 'support.constant.property-value.scss,support.constant.property-value.css',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'CSS/SCSS/LESS Operators',
        'scope': 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'css color standard name',
        'scope':
          'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'css comma',
        'scope': 'punctuation.separator.list.comma.css',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'css attribute-name.id',
        'scope': 'support.constant.color.w3c-standard-color-name.css',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'css property-name',
        'scope': 'support.type.vendored.property-name.css',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'js/ts module',
        'scope': 'support.module.node,support.type.object.module,support.module.node',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'entity.name.type.module',
        'scope': 'entity.name.type.module',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'js variable readwrite',
        'scope':
          'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'js/ts json',
        'scope': 'support.constant.json',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'js/ts Keyword',
        'scope': [
          'keyword.operator.expression.instanceof',
          'keyword.operator.new',
          'keyword.operator.ternary',
          'keyword.operator.optional',
          'keyword.operator.expression.keyof',
        ],
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'js/ts console',
        'scope': 'support.type.object.console',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'js/ts support.variable.property.process',
        'scope': 'support.variable.property.process',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'js console function',
        'scope': 'entity.name.function,support.function.console',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'keyword.operator.misc.rust',
        'scope': 'keyword.operator.misc.rust',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'keyword.operator.sigil.rust',
        'scope': 'keyword.operator.sigil.rust',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'operator',
        'scope': 'keyword.operator.delete',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'js dom',
        'scope': 'support.type.object.dom',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'js dom variable',
        'scope': 'support.variable.dom,support.variable.property.dom',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'keyword.operator',
        'scope':
          'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'C operator assignment',
        'scope':
          'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Punctuation',
        'scope': 'punctuation.separator.delimiter',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Other punctuation .c',
        'scope': 'punctuation.separator.c,punctuation.separator.cpp',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'C type posix-reserved',
        'scope': 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'keyword.operator.sizeof.c',
        'scope': 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'python parameter',
        'scope': 'variable.parameter.function.language.python',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'python type',
        'scope': 'support.type.python',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'python logical',
        'scope': 'keyword.operator.logical.python',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'pyCs',
        'scope': 'variable.parameter.function.python',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'python block',
        'scope':
          'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'python function-call.generic',
        'scope': 'meta.function-call.generic.python',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'python placeholder reset to normal string',
        'scope': 'constant.character.format.placeholder.other.python',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Operators',
        'scope': 'keyword.operator',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Compound Assignment Operators',
        'scope': 'keyword.operator.assignment.compound',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Compound Assignment Operators js/ts',
        'scope': 'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'Keywords',
        'scope': 'keyword',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Namespaces',
        'scope': 'entity.name.namespace',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Variables',
        'scope': 'variable',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Variables',
        'scope': 'variable.c',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Language variables',
        'scope': 'variable.language',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Java Variables',
        'scope': 'token.variable.parameter.java',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Java Imports',
        'scope': 'import.storage.java',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Packages',
        'scope': 'token.package.keyword',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Packages',
        'scope': 'token.package',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Functions',
        'scope': ['entity.name.function', 'meta.require', 'support.function.any-method', 'variable.function'],
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'Classes',
        'scope': 'entity.name.type.namespace',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Classes',
        'scope': 'support.class, entity.name.type.class',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Class name',
        'scope': 'entity.name.class.identifier.namespace.type',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Class name',
        'scope': ['entity.name.class', 'variable.other.class.js', 'variable.other.class.ts'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Class name php',
        'scope': 'variable.other.class.php',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Type Name',
        'scope': 'entity.name.type',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Keyword Control',
        'scope': 'keyword.control',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Control Elements',
        'scope': 'control.elements, keyword.operator.less',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Methods',
        'scope': 'keyword.other.special-method',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'Storage',
        'scope': 'storage',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Storage JS TS',
        'scope': 'token.storage',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name':
          'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
        'scope':
          'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Java Storage',
        'scope': 'token.storage.type.java',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Support',
        'scope': 'support.function',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'Support type',
        'scope': 'support.type.property-name',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Support type',
        'scope': 'support.constant.property-value',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Support type',
        'scope': 'support.constant.font-name',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Meta tag',
        'scope': 'meta.tag',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Strings',
        'scope': 'string',
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'Inherited Class',
        'scope': 'entity.other.inherited-class',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Constant other symbol',
        'scope': 'constant.other.symbol',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'Integers',
        'scope': 'constant.numeric',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Constants',
        'scope': 'constant',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Constants',
        'scope': 'punctuation.definition.constant',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Tags',
        'scope': 'entity.name.tag',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Attributes',
        'scope': 'entity.other.attribute-name',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Attribute IDs',
        'scope': 'entity.other.attribute-name.id',
        'settings': {
          'fontStyle': 'normal',
          'foreground': '#db7233',
        },
      },
      {
        'name': 'Attribute class',
        'scope': 'entity.other.attribute-name.class.css',
        'settings': {
          'fontStyle': 'normal',
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Selector',
        'scope': 'meta.selector',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Headings',
        'scope': 'markup.heading',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Headings',
        'scope': 'markup.heading punctuation.definition.heading, entity.name.section',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'Units',
        'scope': 'keyword.other.unit',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Bold',
        'scope': 'markup.bold,todo.bold',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'Bold',
        'scope': 'punctuation.definition.bold',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'markup Italic',
        'scope': 'markup.italic, punctuation.definition.italic,todo.emphasis',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'emphasis md',
        'scope': 'emphasis md',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown headings',
        'scope': 'entity.name.section.markdown',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
        'scope': 'punctuation.definition.heading.markdown',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'punctuation.definition.list.begin.markdown',
        'scope': 'punctuation.definition.list.begin.markdown',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown heading setext',
        'scope': 'markup.heading.setext',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
        'scope': 'punctuation.definition.bold.markdown',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown Inline Raw',
        'scope': 'markup.inline.raw.markdown',
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown Inline Raw',
        'scope': 'markup.inline.raw.string.markdown',
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
        'scope': 'punctuation.definition.list.markdown',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
        'scope': [
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
          'punctuation.definition.metadata.markdown',
        ],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'beginning.punctuation.definition.list.markdown',
        'scope': ['beginning.punctuation.definition.list.markdown'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
        'scope': 'punctuation.definition.metadata.markdown',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown Underline Link/Image',
        'scope': 'markup.underline.link.markdown,markup.underline.link.image.markdown',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown Link Title/Description',
        'scope': 'string.other.link.title.markdown,string.other.link.description.markdown',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'Regular Expressions',
        'scope': 'string.regexp',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'Escape Characters',
        'scope': 'constant.character.escape',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'Embedded',
        'scope': 'punctuation.section.embedded, variable.interpolation',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Embedded',
        'scope': 'punctuation.section.embedded.begin,punctuation.section.embedded.end',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'illegal',
        'scope': 'invalid.illegal',
        'settings': {
          'foreground': '#ffffff',
        },
      },
      {
        'name': 'illegal',
        'scope': 'invalid.illegal.bad-ampersand.html',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Broken',
        'scope': 'invalid.broken',
        'settings': {
          'foreground': '#ffffff',
        },
      },
      {
        'name': 'Deprecated',
        'scope': 'invalid.deprecated',
        'settings': {
          'foreground': '#ffffff',
        },
      },
      {
        'name': 'Unimplemented',
        'scope': 'invalid.unimplemented',
        'settings': {
          'foreground': '#ffffff',
        },
      },
      {
        'name': 'Source Json Meta Structure Dictionary Json > String Quoted Json',
        'scope': 'source.json meta.structure.dictionary.json > string.quoted.json',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
        'scope': 'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name':
          'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
        'scope':
          'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name':
          'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
        'scope':
          'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] JSON Property Name',
        'scope': 'support.type.property-name.json',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
        'scope': 'support.type.property-name.json punctuation',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'laravel blade tag',
        'scope': 'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'laravel blade @',
        'scope': 'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'use statement for other classes',
        'scope':
          'support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'error suppression',
        'scope': 'keyword.operator.error-control.php',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'php instanceof',
        'scope': 'keyword.operator.type.php',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'style double quoted array index normal begin',
        'scope': 'punctuation.section.array.begin.php',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'style double quoted array index normal end',
        'scope': 'punctuation.section.array.end.php',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'php illegal.non-null-typehinted',
        'scope': 'invalid.illegal.non-null-typehinted.php',
        'settings': {
          'foreground': '#f44747',
        },
      },
      {
        'name': 'php types',
        'scope':
          'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'php call-function',
        'scope': 'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'php function-resets',
        'scope':
          'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'support php constants',
        'scope': 'support.constant.core.rust',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'support php constants',
        'scope':
          'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'php goto',
        'scope': 'entity.name.goto-label.php,support.other.php',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'php logical/bitwise operator',
        'scope': 'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'php regexp operator',
        'scope': 'keyword.operator.regexp.php',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'php comparison',
        'scope': 'keyword.operator.comparison.php',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'php heredoc/nowdoc',
        'scope': 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'python function decorator @',
        'scope': 'meta.function.decorator.python',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'python function support',
        'scope': 'support.token.decorator.python,meta.function.decorator.identifier.python',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'parameter function js/ts',
        'scope': 'function.parameter',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'brace function',
        'scope': 'function.brace',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'parameter function ruby cs',
        'scope': 'function.parameter.ruby, function.parameter.cs',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'constant.language.symbol.ruby',
        'scope': 'constant.language.symbol.ruby',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'rgb-value',
        'scope': 'rgb-value',
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'rgb value',
        'scope': 'inline-color-decoration rgb-value',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'rgb value less',
        'scope': 'less rgb-value',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'sass selector',
        'scope': 'selector.sass',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'ts primitive/builtin types',
        'scope':
          'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'block scope',
        'scope': 'block.scope.end,block.scope.begin',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'cs storage type',
        'scope': 'storage.type.cs',
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'cs local variable',
        'scope': 'entity.name.variable.local.cs',
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'scope': 'token.info-token',
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'scope': 'token.warn-token',
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'scope': 'token.error-token',
        'settings': {
          'foreground': '#f44747',
        },
      },
      {
        'scope': 'token.debug-token',
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'String interpolation',
        'scope': [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded',
        ],
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Reset JavaScript string interpolation expression',
        'scope': ['meta.template.expression'],
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Import module JS',
        'scope': ['keyword.operator.module'],
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'js Flowtype',
        'scope': ['support.type.type.flowtype'],
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'js Flow',
        'scope': ['support.type.primitive'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'js class prop',
        'scope': ['meta.property.object'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'js func parameter',
        'scope': ['variable.parameter.function.js'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'js template literals begin',
        'scope': ['keyword.other.template.begin'],
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'js template literals end',
        'scope': ['keyword.other.template.end'],
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'js template literals variable braces begin',
        'scope': ['keyword.other.substitution.begin'],
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'js template literals variable braces end',
        'scope': ['keyword.other.substitution.end'],
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'js operator.assignment',
        'scope': ['keyword.operator.assignment'],
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'go operator',
        'scope': ['keyword.operator.assignment.go'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'go operator',
        'scope': ['keyword.operator.arithmetic.go', 'keyword.operator.address.go'],
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'Go package name',
        'scope': ['entity.name.package.go'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'elm prelude',
        'scope': ['support.type.prelude.elm'],
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'elm constant',
        'scope': ['support.constant.elm'],
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'template literal',
        'scope': ['punctuation.quasi.element'],
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'html/pug (jade) escaped characters and entities',
        'scope': ['constant.character.entity'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name':
          'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
        'scope': ['entity.other.attribute-name.pseudo-element', 'entity.other.attribute-name.pseudo-class'],
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'Clojure globals',
        'scope': ['entity.global.clojure'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Clojure symbols',
        'scope': ['meta.symbol.clojure'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Clojure constants',
        'scope': ['constant.keyword.clojure'],
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'CoffeeScript Function Argument',
        'scope': ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Ini Default Text',
        'scope': ['source.ini'],
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'Makefile prerequisities',
        'scope': ['meta.scope.prerequisites.makefile'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Makefile text colour',
        'scope': ['source.makefile'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Groovy import names',
        'scope': ['storage.modifier.import.groovy'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Groovy Methods',
        'scope': ['meta.method.groovy'],
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'Groovy Variables',
        'scope': ['meta.definition.variable.name.groovy'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'Groovy Inheritance',
        'scope': ['meta.definition.class.inherited.classes.groovy'],
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'HLSL Semantic',
        'scope': ['support.variable.semantic.hlsl'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'HLSL Types',
        'scope': [
          'support.type.texture.hlsl',
          'support.type.sampler.hlsl',
          'support.type.object.hlsl',
          'support.type.object.rw.hlsl',
          'support.type.fx.hlsl',
          'support.type.object.hlsl',
        ],
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'SQL Variables',
        'scope': ['text.variable', 'text.bracketed'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'types',
        'scope': ['support.type.swift', 'support.type.vb.asp'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'heading 1, keyword',
        'scope': ['entity.name.function.xi'],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'heading 2, callable',
        'scope': ['entity.name.class.xi'],
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'heading 3, property',
        'scope': ['constant.character.character-class.regexp.xi'],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'heading 4, type, class, interface',
        'scope': ['constant.regexp.xi'],
        'settings': {
          'foreground': '#35822f',
        },
      },
      {
        'name': 'heading 5, enums, preprocessor, constant, decorator',
        'scope': ['keyword.control.xi'],
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'heading 6, number',
        'scope': ['invalid.xi'],
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'string',
        'scope': ['beginning.punctuation.definition.quote.markdown.xi'],
        'settings': {
          'foreground': '#4f5d73',
        },
      },
      {
        'name': 'comments',
        'scope': ['beginning.punctuation.definition.list.markdown.xi'],
        'settings': {
          'foreground': '#494646',
        },
      },
      {
        'name': 'link',
        'scope': ['constant.character.xi'],
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'accent',
        'scope': ['accent.xi'],
        'settings': {
          'foreground': '#db7233',
        },
      },
      {
        'name': 'wikiword',
        'scope': ['wikiword.xi'],
        'settings': {
          'foreground': '#ab5454',
        },
      },
      {
        'name': 'language operators like "+", "-" etc',
        'scope': ['constant.other.color.rgb-value.xi'],
        'settings': {
          'foreground': '#ffffff',
        },
      },
      {
        'name': 'elements to dim',
        'scope': ['punctuation.definition.tag.xi'],
        'settings': {
          'foreground': '#494646',
        },
      },
      {
        'name': 'C++/C#',
        'scope': [
          'entity.name.label.cs',
          'entity.name.scope-resolution.function.call',
          'entity.name.scope-resolution.function.definition',
        ],
        'settings': {
          'foreground': '#ad5ffb',
        },
      },
      {
        'name': 'Markdown underscore-style headers',
        'scope': [
          'entity.name.label.cs',
          'markup.heading.setext.1.markdown',
          'markup.heading.setext.2.markdown',
        ],
        'settings': {
          'foreground': '#3572a7',
        },
      },
      {
        'name': 'meta.brace.square',
        'scope': [' meta.brace.square'],
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'name': 'Comments',
        'scope': 'comment, punctuation.definition.comment',
        'settings': {
          'fontStyle': 'italic',
          'foreground': '#494646',
        },
      },
      {
        'name': '[VSCODE-CUSTOM] Markdown Quote',
        'scope': 'markup.quote.markdown',
        'settings': {
          'foreground': '#494646',
        },
      },
      {
        'name': 'punctuation.definition.block.sequence.item.yaml',
        'scope': 'punctuation.definition.block.sequence.item.yaml',
        'settings': {
          'foreground': '#d4d4d4',
        },
      },
      {
        'scope': ['constant.language.symbol.elixir'],
        'settings': {
          'foreground': '#2c6acb',
        },
      },
      {
        'name': 'js/ts italic',
        'scope':
          'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
        'settings': {
          'fontStyle': 'italic',
        },
      },
      {
        'name': 'comment',
        'scope': 'comment.line.double-slash,comment.block.documentation',
        'settings': {
          'fontStyle': 'italic',
        },
      },
      {
        'name': 'Python Keyword Control',
        'scope': 'keyword.control.import.python,keyword.control.flow.python',
        'settings': {
          'fontStyle': 'italic',
        },
      },
      {
        'name': 'markup.italic.markdown',
        'scope': 'markup.italic.markdown',
        'settings': {
          'fontStyle': 'italic',
        },
      },
    ],
  }
}

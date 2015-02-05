var react = require('react')
  , ee = require('nee')()
  , d = react.DOM
  , rows = ['808_kick', '808_cowbell']
  , bars = 4
  , barLength = 4

  var machine = react.createClass(
    { render: function () {
        var self = this
          , controls = rows.map(function (sampleName, index) {
              return row(
                { sample: sampleName
                , ee: ee
                , row: index
                }
              )
            })
        return d.div({ className: 'controls' }, controls)
      }
    }
  )

  var row = react.createClass(
    { render: function () {
        var self = this
          , buttons = []

        for (var i = 0; i < (bars * barLength); i++) {
          buttons.push(button(
            { ee: ee
            , row: self.props.row
            , column: i
            }
          ))
        }

        return d.div({ className: 'row' }, buttons)
      }
    }
  )

  var button = react.createClass(
    { getInitialState: function () {
        return (
          { hover: false
          , active: false
          , armed: false
          }
        )
      }
    , componentDidMount: function () {
        var self = this
          , ee = self.props.ee

        ee.on('note-button-enter', function (column, row) {
          if (self.props.row === row && self.props.column === column) self.setState({ hover: true })
        })

        ee.on('note-button-leave', function (column, row) {
          if (self.props.row === row && self.props.column === column) self.setState({ hover: false })
        })
      }
    , render: function () {
        var self = this
          , row = self.props.row
          , column = self.props.column

        return d.button(
          { className: self.state.hover ? 'note-button hover' : 'note-button'
          , onMouseEnter: function () {
              self.props.ee.emit('note-button-enter', [column, row])
            }
          , onMouseLeave: function () {
              self.props.ee.emit('note-button-leave', [column, row])
            }
          }
        )
      }
    }
  )

  window.addEventListener('load', function (e) {
    var container = document.querySelector('.container')
      , props = (
          { rows: rows
          , bars: bars
          , barLength: 4
          , ee: ee
          }
        )
    react.renderComponent(machine(props), container)
  })
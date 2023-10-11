<template>
  <div class="select-date">
    <div id="date_input" class="mb-2" />
    <div class="select-date-value mb-2 mt-n2">
      <div id="date_range-show" />
    </div>
  </div>
</template>

<script>
const ComponentPrefix = 'Calendar';

let evThis = null;

export default {
  name: 'Calendar',
  props: {
    maxCalendars: {
      type: [String, Number],
      default: 0,
    },
    currentDateSince: {
      type: [String, Number],
      default: 0,
    },
    currentDateUntil: {
      type: [String, Number],
      default: 0,
    },
    minDate: {
      type: [String, Number],
      default: 0,
    },
    maxDate: {
      type: [String, Number],
      default: 0,
    },
  },
  computed: {
    wWidth() {
      return window.screen.width;
    },
  },
  mounted() {
    evThis = this;
    let calendars = 1;
    if (this.maxCalendars !== null && this.maxCalendars !== '' && this.maxCalendars !== 0)
      calendars = this.maxCalendars;
    else if (this.wWidth > 1200)
      calendars = 4;
    else if (this.wWidth > 992)
      calendars = 3;
    else if (this.wWidth > 767)
      calendars = 2;
    this.$services.pickmeup('#date_input', this.getDataValue(calendars));
    const element = document.getElementById('date_input');
    element.addEventListener('pickmeup-change', elem => {
      const Since = evThis.$services.dayjs(elem.detail.formatted_date[0]);
      const Until = evThis.$services.dayjs(elem.detail.formatted_date[1]);
      document.getElementById('date_range-show').textContent = `${Since.format('DD.MM.YYYY')} - ${Until.format('DD.MM.YYYY')}`;
      evThis.$emit('dateSelect', {
        Since,
        Until,
      });
    });
  },
  beforeUnmount() {
    document.getElementById('date_input').innerHTML = '';
  },
  methods: {
    getDataValue(calendars) {
      const options = {
        flat: true,
        format: 'Y-m-d',
        mode: 'range',
        select_year: false,
        calendars,
        default_date: false,
        // min : new Date('<?=$ACCOUNT->getActivity()->getFirstActivity()?>'),
        // max: new Date,
        prev: '<svg class="icon-xs icon-arrowdouble"><use xlink:href="/template/images/icons/sprite.svg#arrowdouble"/></svg>',
        next: '<svg class="icon-xs icon-arrowdouble"><use xlink:href="/template/images/icons/sprite.svg#arrowdouble"/></svg>',
      };
      if (undefined !== this.currentDateSince && undefined !== this.currentDateUntil && this.currentDateSince !== '' && this.currentDateUntil !== '')
        options.date = [this.currentDateSince, this.currentDateUntil];

      if (undefined !== this.minDate && this.minDate !== '') {
        const minDate = this.$services.dayjs(this.minDate);
        if (!minDate.isValid()) {
          console.error(`[${ComponentPrefix}] minDate have invalid  format:`, minDate);
          return options;
        }
        if (undefined !== this.currentDateUntil && !this.currentDateUntil.length)
          if (this.$services.dayjs().diff(minDate, 'd') < 0) {
            options.date = minDate.format('YYYY-MM-DD');
          }
        options.min = minDate.format('YYYY-MM-DD');
      }

      if (undefined !== this.maxDate && this.maxDate !== '') {
        const maxDate = this.$services.dayjs(this.maxDate);
        if (!maxDate.isValid()) {
          console.error(`[${ComponentPrefix}] maxDate have invalid  format:`, maxDate);
          return options;
        }
        if (undefined !== this.currentDateSince && !this.currentDateSince.length)
          if (this.$services.dayjs().diff(maxDate, 'd') > 0) {
            options.date = maxDate.format('YYYY-MM-DD');
          }


        options.max = maxDate.format('YYYY-MM-DD');
      }
      return options;
    },
  },

};
</script>

<style lang="scss">
.pickmeup {
  touch-action: manipulation;
  letter-spacing: 0;

  .pmu-instance {
    display: inline-block;
    width: 216px;
    margin: 0 12px;

    .pmu-button {
      cursor: pointer;
      outline: none;
      text-decoration: none;
      font-weight: 600;
      font-size: 12px;
      color: #5068a5;

      &:hover {
        background: transparent;
        color: #ea5dbb !important;
      }
    }

    .pmu-not-in-month {
      color: #999999 !important;
    }

    .pmu-disabled {
      color: #999999 !important;
      cursor: default;

      &:hover {
        color: #999999 !important;
        cursor: default;
      }
    }

    .pmu-selected {
      color: #ffffff !important;
      background-color: #ea5dbb !important;
      border-radius: 30px;

      &:hover {
        color: #ffffff !important;
        background-color: #ea5dbb !important;
        border-radius: 30px;
      }
    }

    .pmu-not-in-month.pmu-selected {
      background: #17384d;
      background-color: transparent !important;
      color: #999999 !important;
    }

    nav {
      color: #eee;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      line-height: 2em;
      justify-content: space-between;

      * {
        &:first-child {
          &:hover {
            color: #88c5eb;
          }
        }
      }

      .pmu-prev {
        display: none;
        height: 2em;
        width: 1em;
      }

      .pmu-next {
        display: none;
        height: 2em;
        width: 1em;
      }

      .pmu-month {
        width: 14em;
        text-align: center;
        font-size: 14px;
        color: #333333;
      }
    }

    .pmu-years {
      * {
        display: inline-block;
        line-height: 3.6em;
        width: 3.5em;
        text-align: center;
      }
    }

    .pmu-months {
      * {
        display: inline-block;
        line-height: 3.6em;
        width: 3.5em;
        text-align: center;
      }
    }

    .pmu-day-of-week {
      cursor: default;
      color: #999999;
      font-size: 11px;
      font-weight: 400;
      margin: 10px -4px 0;

      * {
        display: inline-block;
        line-height: 24px;
        width: 24px;
        height: 24px;
        text-align: center;
        margin: 4px;
        padding-right: 0;
      }

      div {
        &:nth-child(6) {
          color: #ea5dbb;
        }

        &:nth-child(7) {
          color: #ea5dbb;
        }
      }
    }

    .pmu-days {
      * {
        display: inline-block;
        line-height: 24px;
        width: 24px;
        height: 24px;
        text-align: center;
        margin: 4px;
      }
    }

    &:first-child {
      .pmu-prev {
        display: block;
      }

      .pmu-month {
        width: 13em;
      }

      &:last-child {
        .pmu-month {
          width: 12em;
        }
      }
    }

    &:last-child {
      .pmu-next {
        display: block;
      }

      .pmu-month {
        width: 13em;
      }
    }

    .pmu-button.pmu-saturday {
      color: #ea5dbb;
    }

    .pmu-button.pmu-sunday {
      color: #ea5dbb;
    }
  }

  &:not(.pmu-view-days) {
    .pmu-days {
      display: none;
    }

    .pmu-day-of-week {
      display: none;
    }
  }

  &:not(.pmu-view-months) {
    .pmu-months {
      display: none;
    }
  }

  &:not(.pmu-view-years) {
    .pmu-years {
      display: none;
    }
  }
}

.pickmeup-absolute {
  position: absolute;
  z-index: 999999;
  background: #ffff;
  border-radius: 11px;
  padding: 10px 0 0;
}

.pickmeup-absolute.pmu-hidden {
  display: none;
}

.pickmeup.pmu-flat {
  position: relative;
  display: flex;
  margin: 0 -12px 24px;
}

.pmu-prev {
  .icon-xs {
    transform: rotate(90deg);
  }

  fill: #5068a5;

  &:hover {
    fill: #ea5dbb;
  }
}

.pmu-next {
  fill: #5068a5;

  .icon-xs {
    transform: rotate(-90deg);
  }

  &:hover {
    fill: #ea5dbb;
  }
}

.pmu-days {
  margin: 0 -4px;
}

.select-date {
  margin-top: 12px;
}

.select-date-value {
  display: inline-block;
  float: right;

  input {
    border: none;
    color: #5068a5;
    min-width: 180px;
    text-align: right;
    padding-right: 5px;
  }
}

.modal_period {
  .modal-dialog {
    display: table;
  }
}

@media (max-width: 767px) {
  .modal_period {
    .modal-dialog {
      margin: 0.5rem auto;
    }

    .modal-body {
      padding: 0px 48px 20px;
    }
  }
  .select-date-value {
    input {
      text-align: center;
      margin-top: 15px;
    }

    float: none;
    display: block;
  }
}
</style>

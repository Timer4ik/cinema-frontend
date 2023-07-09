<template>
  <Form
    class="edit"
    :validation-schema="ValidationSchema"
    @submit="handleSubmit"
  >
    <div class="edit__title">Обработка фильма для проката</div>
    <FieldComponent
      name="name"
      class="edit__select-film"
      placeholder="Человек паук"
      label="Выбранный фильм"
      :value="rentFilm?.title"
    />

    <div class="edit__block edit__block_first">
      <div class="edit__title edit__title_second">Дата проката</div>

      <div
        class="edit__block_dates"
        @click="isActiveCalendar = !isActiveCalendar"
      >
        <FieldComponent
          name="rentStartDate"
          label="Дата начала проката"
          :value="startRangeDate?.numericDate"
          readonly
        />
        <FieldComponent
          name="rentEndDate"
          label="Дата конца проката"
          :value="endRangeDate?.numericDate"
          readonly
        />
      </div>

      <!-- <div class="calendar" v-if="isActiveCalendar">
                <div class="calendar__inner" v-click-away="() => isActiveCalendar = false">
                    <div class="calendar__controls">
                        <div class="controls__prev" @click="calendar.prevMonth()">prev</div>
                        {{ calendar?.selectedDate?.getLocaleString({ year: "numeric", month: "long" }) }}
                        <div class="controls__next" @click="calendar.nextMonth()">next</div>
                    </div>
                    <table class="calendar__table">
                        <tr>
                            <td>
                                <div class="cell weekDay">ПН</div>
                            </td>
                            <td>
                                <div class="cell weekDay">ВТ</div>
                            </td>
                            <td>
                                <div class="cell weekDay">СР</div>
                            </td>
                            <td>
                                <div class="cell weekDay">ЧТ</div>
                            </td>
                            <td>
                                <div class="cell weekDay">ПТ</div>
                            </td>
                            <td>
                                <div class="cell weekDay">СБ</div>
                            </td>
                            <td>
                                <div class="cell weekDay">ВС</div>
                            </td>
                        </tr>
                        <tr v-for="row, idx in calendar.rows" :key="idx">
                            <td v-for="cell in row" :key="cell.id">
                                <div class="cell" :class="{
                                    event: cell.isEvent,
                                    notSelectedDate: cell.notThisMonth,
                                    isRangeEndDate: cell.isRangeEndDate,
                                    isRangeStartDate: cell.isRangeStartDate,
                                    isRangeBetweenDate: cell.isRangeBetweenDate,
                                }" @click="selectRange(cell.cellDate)">
                                    {{ cell.cellDate.day }}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div> -->
    </div>

    <div class="edit__block edit__block_second">
      <div class="edit__title edit__title_second">Время cеансов</div>

      <div class="edit__block_times">
        <FieldComponent
          name="sessionFirst"
          type="time"
          label="Время сеанса 1"
          :value="rentFilm?.sessions?.[0]"
        />
        <FieldComponent
          name="sessionSecond"
          type="time"
          label="Время сеанса 2"
          :value="rentFilm?.sessions?.[1]"
        />
        <FieldComponent
          name="sessionThird"
          type="time"
          label="Время сеанса 3"
          :value="rentFilm?.sessions?.[2]"
        />
        <FieldComponent
          name="sessionFourth"
          type="time"
          label="Время сеанса 4"
          :value="rentFilm?.sessions?.[3]"
        />
      </div>
    </div>

    <div class="edit__block edit__block_third">
      <div class="edit__title edit__title_third">Дополнительная информация</div>

      <div class="edit__block_info">
        <FieldComponent
          name="price"
          type="number"
          label="Цена"
          :value="rentFilm?.price"
        />
        <FieldSelect
          name="status"
          label="Статус"
          :value="selectedStatus?.value"
          :options="getFilmStatus()"
          @selected="setSelected"
          @stateActive="(state) => (isActiveSelect = state)"
          :isActive="isActiveSelect"
        >
        </FieldSelect>
        <FieldComponent
          name="description"
          label="Описание"
          :value="rentFilm?.description"
        />
      </div>
    </div>

    <button class="edit__save">Сохранить</button>
  </Form>
</template>

<script setup>
const { film, fetchFilmById } = useFilmById();
await fetchFilmById(1);
</script>
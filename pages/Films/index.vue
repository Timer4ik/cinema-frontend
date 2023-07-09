<template>
  <div>
    <h1>Фильмы в прокате</h1>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Название фильма</th>
          <th>Фото</th>
          <th>Описание</th>
          <th>Стоимость за сеанс</th>
          <th>Начало проката</th>
          <th>Конец проката</th>
          <th>Время сеансов</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="film in films" :key="film.rent_film_id">
          <th class="menu">
            <UiMenu>
              <div class="popover__item" @click="$router.push(`/films/${film.rent_film_id}`)">Просмотр</div>
              <div>Удалить</div>
            </UiMenu>
          </th>
          <th>
            {{ film?.name }}
          </th>
          <th>
            {{ film?.image_url }}
          </th>
          <th>
            {{ film?.descr }}
          </th>
          <th>
            {{ film?.price }}
          </th>
          <th>
            {{ film?.rent_start_dt }}
          </th>
          <th>
            {{ film?.rent_end_dt }}
          </th>
          <th>
            {{ film?.session_times }}
          </th>
        </tr>
      </tbody>
    </table>
    <UiPopover></UiPopover>
  </div>
</template>

<script setup>
const { films, fetchFilms } = useFilms();


await fetchFilms();

</script>

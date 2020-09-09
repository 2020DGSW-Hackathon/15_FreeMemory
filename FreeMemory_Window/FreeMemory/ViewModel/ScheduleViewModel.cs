using FreeMemory.Model;
using Prism.Commands;
using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FreeMemory.ViewModel
{
    public class ScheduleViewModel : BindableBase
    {
        private string SCHEDULE_URL = "/schedule";

        #region Property
        private ObservableCollection<Schedule> _schedules = new ObservableCollection<Schedule>();
        public ObservableCollection<Schedule> Schedules
        {
            get => _schedules;
            set => SetProperty(ref _schedules, value);
        }

        private DateTime _selectedDate = DateTime.Now;
        public DateTime SelectedDate
        {
            get => _selectedDate;
            set => SetProperty(ref _selectedDate, value);
        }

        private string _selectedDay = DateTime.Now.Day.ToString();
        public string SelectedDay
        {
            get => _selectedDay;
            set => SetProperty(ref _selectedDay, value);
        }

        private DayOfWeek _selectedDayOfWeek = DateTime.Now.DayOfWeek;
        public DayOfWeek SelectedDayOfWeek
        {
            get => _selectedDayOfWeek;
            set => SetProperty(ref _selectedDayOfWeek, value);
        }
        #endregion

        #region Delegate

        public DelegateCommand PrevDayCommand { get; set; }
        public DelegateCommand TodayCommand { get; set; }
        public DelegateCommand NextDayCommand { get; set; }

        #endregion

        public ScheduleViewModel()
        {
            LoadSchedule();
            PrevDayCommand = new DelegateCommand(OnPrevDay);
            TodayCommand = new DelegateCommand(OnToday);
            NextDayCommand = new DelegateCommand(OnNextDay);
        }

        public async void LoadSchedule()
        {
            var resp = await App.network.GetResponse<ScheduleResponse>(App.ServerUrl + SCHEDULE_URL, RestSharp.Method.GET);

            if (resp != null && resp.Data.schedules.Count != 0)
            {
                try
                {
                    Schedule schedule = new Schedule();

                    foreach (var item in resp.Data.schedules)
                    {
                        //if (item.StartTime <= SelectedDate && SelectedDate <= item.EndTime)
                        //{
                        //    Schedules.Add(item);
                        //}
                        Schedules.Add(item);
                    }
                }
                catch (Exception e)
                {
                    Debug.WriteLine(e.StackTrace);
                }
            }
        }

        private void OnPrevDay()
        {
            SelectedDate = SelectedDate.AddDays(-1);
            Schedules.Clear();
            LoadSchedule();
        }

        private void OnToday()
        {
            SelectedDate = DateTime.Now;
            Schedules.Clear();
            LoadSchedule();
        }

        private void OnNextDay()
        {
            SelectedDate = SelectedDate.AddDays(1);
            Schedules.Clear();
            LoadSchedule();
        }
    }
}

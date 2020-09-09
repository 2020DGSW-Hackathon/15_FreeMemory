using FreeMemory.Model;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace FreeMemory
{
    /// <summary>
    /// Interaction logic for SettingWindow.xaml
    /// </summary>
    public partial class SettingWindow : Window
    {
        private string SCHEDULE_URL = "/schedule";
        MainWindow mainWindow;

        public SettingWindow(MainWindow window)
        {
            InitializeComponent();
            mainWindow = window;
            DataContext = mainWindow;
            Loaded += SettingWindow_Loaded;
        }

        private void SettingWindow_Loaded(object sender, RoutedEventArgs e)
        {
            var desktopWorkingArea = SystemParameters.WorkArea;
            this.Left = desktopWorkingArea.Right - this.Width;
            this.Top = desktopWorkingArea.Bottom - this.Height;
        }

        private async void btnAdd(object sender, RoutedEventArgs e)
        {
            JObject jobj = new JObject();
            jobj["name"] = tbTitle.Text.ToString();
            jobj["startDate"] = calendar.SelectedDate;
            jobj["endDate"] = calendar.SelectedDate;
            jobj["target"] = cbGrade.SelectedIndex + 1;
            jobj["type"] = cbTarget.SelectedIndex + 1;

            var resp = await App.network.GetResponse<Nothing>(App.ServerUrl + SCHEDULE_URL, RestSharp.Method.POST, jobj.ToString());

            MessageBox.Show(resp.Message);

            mainWindow.LoadSchedule();
            tbTitle.Text = "";
        }

        private void cbTarget_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (cbTarget.SelectedIndex == 1)
            {
                cbGrade.IsEnabled = false;
            }
            else
            {
                cbGrade.IsEnabled = true;
            }
        }
    }
}

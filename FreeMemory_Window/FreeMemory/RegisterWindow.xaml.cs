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
    /// Interaction logic for RegisterWindow.xaml
    /// </summary>
    public partial class RegisterWindow : Window
    {
        Window loginWindow;
        private const string REGISTER_URL = "/auth/register";

        public RegisterWindow(Window window)
        {
            InitializeComponent();
            loginWindow = window;
            Closed += RegisterWindow_Closed;
        }

        private void RegisterWindow_Closed(object sender, EventArgs e)
        {
            loginWindow.Visibility = Visibility.Visible;
        }

        private async void btnRegister_Click(object sender, RoutedEventArgs e)
        {
            JObject jobj = new JObject();
            jobj["id"] = tbId.Text;
            jobj["pw"] = pbPwd.Password;
            jobj["name"] = tbName.Text;
            jobj["grade"] = int.Parse(cbGrade.SelectedItem.ToString().Split(' ')[1].Substring(0, 1));
            jobj["classroom"] = int.Parse(cbClassroom.SelectedItem.ToString().Split(' ')[1].Substring(0, 1));
            jobj["studentNumber"] = int.Parse(cbNumber.SelectedItem.ToString().Split(' ')[1].Substring(0, 1));
            jobj["email"] = tbEmail.Text;

            var resp = await App.network.GetResponse<Nothing>(App.ServerUrl + REGISTER_URL, RestSharp.Method.POST, jobj.ToString());

            MessageBox.Show(resp.Message);

            if (resp.Status == 200)
            {
                loginWindow.Visibility = Visibility.Visible;
                this.Close();
            }
        }

        private void btnCancle_Click(object sender, RoutedEventArgs e)
        {
            loginWindow.Visibility = Visibility.Visible;
            this.Close();
        }
    }
}

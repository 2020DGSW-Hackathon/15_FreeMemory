using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Forms;

namespace FreeMemory.View
{
    public partial class MainWindow : Window
    {
        private System.Windows.Forms.NotifyIcon notifyIcon = new System.Windows.Forms.NotifyIcon();
        private readonly ContextMenu Menu = new ContextMenu();

        private void SetTraySystem()
        {
            SetContextMenu();

            notifyIcon.Text = "FreeMemory";
            notifyIcon.ContextMenu = Menu;
            notifyIcon.Visible = true;
        }

        private void SetContextMenu()
        {
            MenuItem exitItem = new MenuItem("Exit");

            exitItem.Click += ExitItem_Click;

            Menu.MenuItems.Add(exitItem);
        }

        private void ExitItem_Click(object sender, EventArgs e)
        {
            App.Current.Shutdown();
        }
    }
}

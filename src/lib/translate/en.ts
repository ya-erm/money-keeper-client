import { addMessages } from 'svelte-i18n';
import type { Dictionary } from './messages';

export const enDict: Dictionary = {
  'app.title': 'Money Keeper',
  // Common
  'common.back': 'Back',
  'common.select': 'Select',
  'common.accept': 'Accept',
  'common.apply': 'Apply',
  'common.available_variants': 'Available variants',
  'common.optional': 'optional',
  'common.loading': 'Loading...',
  'common.synchronizing': 'Synchronizing',
  'common.show_more': 'Show more',
  'common.sorting': 'Sorting',
  'common.sort_by': 'Sort by',
  'common.sort_direction': 'Sort direction',
  'common.ascending': 'Ascending',
  'common.descending': 'Descending',
  'common.grouping': 'Grouping',
  'common.no_items': 'No items yet',
  'common.nothing_found': 'Nothing found',
  'common.create': 'Create',
  'common.save': 'Save',
  'common.add': 'Add',
  'common.save_changes_failure': 'Failed to save changes',
  'common.save_changes_success': 'Changes were saved',
  'common.search': 'Search',
  'common.clear': 'Clear',
  'common.cancel': 'Cancel',
  'common.delete': 'Delete',
  'common.ok': 'OK',
  'common.continue': 'Continue',
  'common.reset': 'Reset',
  'common.go_back_to_list': 'Go back to list',
  'common.count': '{count} pcs.',
  'common.show': 'Show',
  'common.hide': 'Hide',
  'common.data_problems': 'Data storage initialization finished with {count, plural, =1 {# error} other {# errors}}',
  'common.select_all': 'Select all',
  // Timezones
  'timezones.select_time_zone': 'Select time zone',
  'timezones.current_time_zone': 'Current time zone',
  'timezones.favorite_time_zones': 'Favorite time zones',
  'timezones.all_time_zones': 'All time zones',
  'timezones.timezone_added_to_favorites': 'Time zone was added to favorites',
  'timezones.timezone_removed_from_favorites': 'Time zone was removed from favorites',
  // Tags
  'tags.add_modal_header': 'Add tag',
  'tags.edit_modal_header': 'Edit tag',
  'tags.title': 'Title',
  'tags.delete_tag': 'Delete tag',
  'tags.add_tag_failure': 'Failed to add tag',
  'tags.edit_tag_failure': 'Failed to edit tag',
  'tags.delete_tag_failure': 'Failed to delete tag',
  // Language
  'language.select_language': 'Select language',
  // Auth
  'auth.login.title': 'Login',
  'auth.login': 'Login',
  'auth.password': 'Password',
  'auth.sign_in': 'Sign in',
  'auth.incorrect_login_or_password': 'Incorrect login or password',
  'auth.incorrect_old_password': 'Incorrect old password',
  'auth.failed_to_login': 'Failed to login',
  'auth.register.title': 'Register',
  'auth.name': 'Name',
  'auth.phone': 'Phone',
  'auth.old_password': 'Old password',
  'auth.new_password': 'New password',
  'auth.repeat_password': 'Repeat password',
  'auth.passwords_must_be_same': 'Passwords must be same',
  'auth.register': 'Sign up',
  'auth.user_already_exists': 'User already exists',
  'auth.registration_success': 'Registration was successful',
  'auth.registration_failure': 'Failed to register',
  'auth.logout.title': 'Logout',
  'auth.logging_out': 'Logging out...',
  'auth.sign_out': 'Sign out',
  'auth.profile': 'Profile',
  'auth.logged_in_as': 'You are logged in as {name}!',
  'auth.not_logged_in': 'You are not logged in',
  'auth.continue_as_guest': 'Continue as a guest',
  'auth.logged_in_as_guest_info': "You're are using app as a guest. Data won't be sync with server.",
  'auth.guest': 'Guest',
  // Accounts
  'accounts.list': 'Account list',
  'accounts.title': 'Accounts',
  'accounts.no_data': 'No accounts yet. Create a new one.',
  'accounts.new_account': 'New account',
  'accounts.create_account': 'Create account',
  'accounts.create_account_failure': 'Failed to create account',
  'accounts.create_account_success': 'Account was created',
  'accounts.edit_account': 'Update account',
  'accounts.delete_account': 'Delete account',
  'accounts.delete_account_confirm': 'Are you sure want to delete account?',
  'accounts.delete_account_confirm_description':
    "All account's operations also will be deleted. This action can't be undone.",
  'accounts.delete_account_failure': 'Failed to delete account',
  'accounts.delete_account_success': 'Account was deleted',
  'accounts.name': 'Name',
  'accounts.currency': 'Currency',
  'accounts.icon': 'Icon',
  'accounts.color': 'Color',
  'accounts.select_color': 'Select color',
  'accounts.tags': 'Tags',
  'accounts.sort': 'Sort accounts',
  'accounts.archived_accounts': 'Archived accounts',
  'accounts.archive': 'Archive',
  'accounts.archived': 'Archived',
  'accounts.restore': 'Restore',
  // Analytics
  'analytics.title': 'Analytics',
  'analytics.categories.start_date': 'Start date',
  'analytics.categories.end_date': 'End date',
  'analytics.categories.monthly_interval': 'Monthly',
  'analytics.categories.custom_interval': 'Custom',
  'analytics.accounts.total': 'Total',
  'analytics.accounts.grouping': 'Grouping',
  'analytics.accounts.grouping.not_selected': 'No grouping',
  'analytics.accounts.grouping.not_selected.description': 'Show all accounts',
  'analytics.accounts.grouping.select_grouping': 'Select grouping',
  'analytics.accounts.hide_zero_balance_accounts': 'Hide zero balance accounts',
  'analytics.balance.legend': 'Legend',
  'analytics.groupings.title': 'Groupings',
  'analytics.groupings.create_grouping': 'Add grouping',
  'analytics.groupings.new_grouping': 'New grouping',
  'analytics.groupings.grouping_not_found': 'Grouping not found',
  'analytics.groupings.name': 'Name',
  'analytics.groupings.groups': 'Groups',
  'analytics.groupings.groups.add': 'Add group',
  'analytics.groupings.groups.delete': 'Delete group',
  'analytics.groupings.groups.name': 'Name',
  'analytics.groupings.groups.color': 'Color',
  'analytics.groupings.groups.accounts': 'Accounts',
  'analytics.groupings.groups.accounts.add': 'Add account',
  'analytics.groupings.groups.accounts.delete': 'Delete',
  'analytics.groupings.groups.accounts.failed_to_add': 'Failed to add account',
  'analytics.groupings.groups.accounts.failed_to_delete': 'Failed to remove account',
  'analytics.groupings.groups.other': 'Other',
  // Categories
  'categories.title': 'Categories',
  'categories.incomings': 'Incomings',
  'categories.outgoings': 'Outgoings',
  'categories.no_data': 'No categories yet. Add the new one.',
  'categories.new_category': 'New category',
  'categories.incoming': 'Incoming',
  'categories.outgoing': 'Outgoing',
  'categories.create_category': 'Create category',
  'categories.create_category_success': 'Category was created',
  'categories.create_category_failure': 'Failed to create category',
  'categories.edit_category': 'Edit category',
  'categories.delete_category': 'Delete category',
  'categories.delete_category_failure': 'Failed to delete category',
  'categories.delete_category_success': 'Category was deleted',
  'categories.name': 'Name',
  'categories.icon': 'Icon',
  'categories.more': 'More',
  // Categories list
  'categories.list.Alcohol': 'Alcohol',
  'categories.list.Bank': 'Bank',
  'categories.list.Beauty': 'Beauty',
  'categories.list.Books': 'Books',
  'categories.list.Car': 'Car',
  'categories.list.Children': 'Children',
  'categories.list.Clothes': 'Clothes',
  'categories.list.Connection': 'Connection',
  'categories.list.Debts': 'Debts',
  'categories.list.Delivery': 'Delivery',
  'categories.list.Donations': 'Donations',
  'categories.list.Education': 'Education',
  'categories.list.Electronics': 'Electronics',
  'categories.list.Entertainment': 'Entertainment',
  'categories.list.Fitness': 'Fitness',
  'categories.list.Fuel': 'Fuel',
  'categories.list.Furniture': 'Furniture',
  'categories.list.Gifts': 'Gifts',
  'categories.list.Hobby': 'Hobby',
  'categories.list.Insurance': 'Insurance',
  'categories.list.Investment': 'Investment',
  'categories.list.Journeys': 'Journeys',
  'categories.list.Laundry': 'Laundry',
  'categories.list.Loans': 'Loans',
  'categories.list.Lunches': 'Lunches',
  'categories.list.Medicine': 'Medicine',
  'categories.list.Movies': 'Movies',
  'categories.list.Music': 'Music',
  'categories.list.Parking': 'Parking',
  'categories.list.Pets': 'Pets',
  'categories.list.Photos': 'Photos',
  'categories.list.Products': 'Products',
  'categories.list.Purchases': 'Purchases',
  'categories.list.Renovation': 'Renovation',
  'categories.list.Restaurants': 'Restaurants',
  'categories.list.Services': 'Services',
  'categories.list.Stationery': 'Stationery',
  'categories.list.Subscriptions': 'Subscriptions',
  'categories.list.Sweets': 'Sweets',
  'categories.list.Technic': 'Technic',
  'categories.list.Textile': 'Textile',
  'categories.list.Tobacco': 'Tobacco',
  'categories.list.Transport': 'Transport',
  // Icons
  'icons.title': 'Icons',
  'icons.select_icon': 'Select icon',
  'icons.recommended': 'Recommended',
  'icons.custom': 'Custom',
  // Groups
  'groups.title': 'Groups',
  'groups.create_group': 'Create group',
  'groups.name': 'Name',
  'groups.edit_group': 'Edit group',
  'groups.edit_group_name': "Edit group's name",
  'groups.users': 'Users',
  'groups.add_user': 'Add user',
  'groups.failed_to_add_user': 'Failed to add user',
  'groups.username': 'Username',
  'groups.delete_user_confirm': 'Are you sure want to exclude user?',
  'groups.delete_user_confirm_description':
    'User will loss access to accounts, categories and operations in this group.',
  'groups.delete_user': 'Exclude',
  'groups.failed_to_delete_user': 'Failed to exclude user from group',
  'groups.delete_group': 'Delete group',
  'groups.delete_group_confirm': 'Are you sure want to delete group?',
  'groups.delete_group_confirm_description':
    "All accounts, categories and operations will be deleted. This action can' be undone.",
  'groups.failed_to_delete_group': 'Failed to delete group',
  // Transactions
  'transactions.title': 'Operations',
  'transactions.create_transaction': 'Create operation',
  'transactions.new_transaction': 'New operation',
  'transactions.incoming': 'Incoming',
  'transactions.outgoing': 'Outgoing',
  'transactions.transfer': 'Transfer',
  'transactions.from': 'From',
  'transactions.to': 'To',
  'transactions.account': 'Account',
  'transactions.select_account': 'Select account',
  'transactions.account_is_required': 'Select an account firstly',
  'transactions.destination_account_is_required': 'Select an destination account firstly',
  'transactions.accounts_must_be_different': 'Select different accounts',
  'transactions.date': 'Date',
  'transactions.time': 'Time',
  'transactions.dateTime': 'Date and time',
  'transactions.amount': 'Amount',
  'transactions.category': 'Category',
  'transactions.category_is_required': 'Select a category firstly',
  'transactions.comment': 'Comment',
  'transactions.tags': 'Tags',
  'transactions.edit_transaction': 'Edit operation',
  'transactions.create_transaction_success': 'Operation was created',
  'transactions.create_transaction_failure': 'Failed to create operation',
  'transactions.delete_transaction': 'Delete operation',
  'transactions.delete_transaction_success': 'Operation was deleted',
  'transactions.delete_transaction_failure': 'Failed to delete operation',
  'transactions.feature_operations': 'Feature operations',
  'transactions.another_currency': 'Another currency',
  'transactions.same_currency': 'Same currency',
  'transactions.additional_parameters': 'Additional parameters',
  'transactions.exclude_from_analytics': 'Exclude from analytics',
  // Transactions import
  'transactions.import': 'Import',
  'transactions.import.title': 'Import operations',
  'transactions.import.invalid_expression': 'Enter search request to filter operations of one category',
  'transactions.import.no_category': 'No category',
  'transactions.import.set_category': 'Set category',
  'transactions.import.select_category_title': 'Select category',
  'transactions.import.select_category_multi_title':
    'Select category for {count, plural, =1 {# operation} other {# operations}}',
  'transactions.import.apply': 'Apply category',
  'transactions.import.category_applied':
    'Category "{category}" applied for {count, plural, =1 {# operation} other {# operations}}',
  'transactions.import.select_category_for_all_operations': 'Select categories for all operations',
  'transactions.import.finish': 'Finish import',
  'transactions.import.finished': '{count, plural, one {# operation was imported} other {# operations were imported}}',
  'transactions.show_more': 'Show more',
  // Import rules
  'transactions.import.rules.title': 'Rules of import',
  'transactions.import.rules.create': 'Create rule',
  'transactions.import.rules.edit_rule': 'Edit rule',
  'transactions.import.rules.how_does_it_work': 'How does it work?',
  'transactions.import.rules.how_does_it_work.description':
    'If the description of the operation satisfies the search condition, then the selected category will be assigned to the operation and the selected tags will be added to it',
  'transactions.import.rules.condition': 'Search condition',
  'transactions.import.rules.category': 'Category',
  'transactions.import.rules.tags': 'Tags',
  'transactions.import.rules.category_or_tags_required': 'Select category or/and tags firstly',
  'transactions.import.rules.save_rule_success': 'Rule was saved',
  'transactions.import.rules.save_rule_failure': 'Failed to save rule',
  'transactions.import.rules.delete': 'Delete rule',
  'transactions.import.rules.delete_success': 'Rule was deleted',
  'transactions.import.rules.delete_failure': 'Failed to delete rule',
  // System
  'system.category.transfer_in': 'Transfer from other account',
  'system.category.transfer_out': 'Transfer to other account',
  // Currency rates
  'currency_rates.title': 'Currency rates',
  'currency_rates.default_currency': 'Main currency',
  'currency_rates.new_currency_rate': 'New currency rate',
  'currency_rates.currency1': 'Currency 1',
  'currency_rates.currency2': 'Currency 2',
  'currency_rates.rate': 'Rate',
  'currency_rates.delete_currency_rate': 'Delete currency rate',
  'currency_rates.delete_currency_rate_success': 'Currency rate was deleted',
  'currency_rates.delete_currency_rate_failure': 'Failed to delete currency rate',
  // Import and Export
  'import_export.title': 'Import / Export',
  'import_export.import': 'Import',
  'import_export.export': 'Export',
  'import_export.raw_data_json': 'RAW data (json)',
  'import_export.parse_data': 'Parse json',
  'import_export.start_import': 'Import',
  'import_export.uploading': 'Uploading...',
  'import_export.save': 'Save as json',
  'import_export.other_features': 'Other features',
  'import_export.log_operations_keys': 'Log operations keys',
  'import_export.categories': 'Categories',
  'import_export.account_tags': 'Account tags',
  'import_export.accounts': 'Accounts',
  'import_export.operation_tags': 'Operation tags',
  'import_export.operations': 'Operations',
  'import_export.currency_rates': 'Currency rates',
  'import_export.groupings': 'Groupings',
  'import_export.nothing_to_import': 'Nothing to import. The data is up to date',
  'import_export.import_success': '{count, plural, =1 {# item was} other {# items were}} added',
  'import_export.import_failure': 'Failed to import items',
  'import_export.operations_keys_logged': 'Operations keys were logged. See logs or console',
  // Settings
  'settings.title': 'Settings',
  'settings.language': 'Language',
  'settings.select_language': 'Select language',
  'settings.common': 'Common',
  'settings.darkMode': 'Dark mode',
  'settings.theme': 'Theme',
  'settings.theme.light': 'Light',
  'settings.theme.dark': 'Dark',
  'settings.theme.system': 'System',
  'settings.import_export': 'Import / Export',
  'settings.profile': 'Profile',
  'settings.profile.change_name': 'Change name',
  'settings.profile.change_name_failure': 'Failed to change name',
  'settings.profile.change_login': 'Change login',
  'settings.profile.change_login_failure': 'Failed to change login',
  'settings.profile.change_password': 'Change password',
  'settings.profile.change_password_success': 'Password was changed',
  'settings.profile.change_password_failure': 'Failed to change password',
  'settings.profile.change_workspace': 'Select workspace',
  'settings.profile.change_workspace_failure': 'Failed to select workspace',
  'settings.profile.logout': 'Log out',
  'settings.collaboration': 'Collaboration',
  'settings.collaboration.workspace': 'Workspace',
  'settings.collaboration.workspaces': 'Workspaces',
  'settings.collaboration.invites': 'Invites',
  'settings.collaboration.blocklist': 'Blocklist',
  'settings.debug_tools': 'Debug tools',
  'settings.logs': 'Logs',
  'settings.logs.filters': 'Filters',
  'settings.logs.show_filters': 'Show filters',
  'settings.logs.hide_filters': 'Hide filters',
  'settings.encryption': 'Encryption',
  'settings.report_problem': 'Report a problem',
  'settings.version': 'Version: {version}',
  'settings.uikit': 'UI Kit',
};

addMessages('en-US', enDict);

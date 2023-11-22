export type Messages =
  | 'app.title'
  // Common
  | 'common.back'
  | 'common.select'
  | 'common.accept'
  | 'common.available_variants'
  | 'common.optional'
  | 'common.loading'
  | 'common.synchronizing'
  | 'common.show_more'
  | 'common.sorting'
  | 'common.sort_by'
  | 'common.sort_direction'
  | 'common.ascending'
  | 'common.descending'
  | 'common.grouping'
  | 'common.no_items'
  | 'common.nothing_found'
  | 'common.create'
  | 'common.save'
  | 'common.add'
  | 'common.save_changes_failure'
  | 'common.save_changes_success'
  | 'common.search'
  | 'common.clear'
  | 'common.cancel'
  | 'common.delete'
  | 'common.ok'
  | 'common.continue'
  | 'common.reset'
  | 'common.go_back_to_list'
  | 'common.count'
  | 'common.show'
  | 'common.hide'
  // Timezones
  | 'timezones.select_time_zone'
  | 'timezones.current_time_zone'
  | 'timezones.favorite_time_zones'
  | 'timezones.all_time_zones'
  | 'timezones.timezone_added_to_favorites'
  | 'timezones.timezone_removed_from_favorites'
  // Tags
  | 'tags.add_modal_header'
  | 'tags.edit_modal_header'
  | 'tags.title'
  | 'tags.delete_tag'
  | 'tags.add_tag_failure'
  | 'tags.edit_tag_failure'
  | 'tags.delete_tag_failure'
  // Language
  | 'language.select_language'
  // Auth
  | 'auth.login.title'
  | 'auth.login'
  | 'auth.password'
  | 'auth.sign_in'
  | 'auth.incorrect_login_or_password'
  | 'auth.incorrect_old_password'
  | 'auth.failed_to_login'
  | 'auth.register.title'
  | 'auth.name'
  | 'auth.phone'
  | 'auth.old_password'
  | 'auth.new_password'
  | 'auth.repeat_password'
  | 'auth.passwords_must_be_same'
  | 'auth.register'
  | 'auth.user_already_exists'
  | 'auth.registration_success'
  | 'auth.registration_failure'
  | 'auth.logout.title'
  | 'auth.logging_out'
  | 'auth.sign_out'
  | 'auth.profile'
  | 'auth.logged_in_as'
  | 'auth.not_logged_in'
  | 'auth.continue_as_guest'
  | 'auth.logged_in_as_guest_info'
  | 'auth.guest'
  // Accounts
  | 'accounts.list'
  | 'accounts.title'
  | 'accounts.no_data'
  | 'accounts.new_account'
  | 'accounts.create_account'
  | 'accounts.create_account_failure'
  | 'accounts.create_account_success'
  | 'accounts.edit_account'
  | 'accounts.delete_account'
  | 'accounts.delete_account_confirm'
  | 'accounts.delete_account_confirm_description'
  | 'accounts.delete_account_failure'
  | 'accounts.delete_account_success'
  | 'accounts.name'
  | 'accounts.currency'
  | 'accounts.icon'
  | 'accounts.color'
  | 'accounts.select_color'
  | 'accounts.tags'
  | 'accounts.sort'
  // Analytics
  | 'analytics.title'
  | 'analytics.accounts.total'
  | 'analytics.accounts.grouping'
  | 'analytics.accounts.grouping.not_selected'
  | 'analytics.accounts.grouping.not_selected.description'
  | 'analytics.accounts.grouping.select_grouping'
  | 'analytics.groupings.title'
  | 'analytics.groupings.create_grouping'
  | 'analytics.groupings.new_grouping'
  | 'analytics.groupings.grouping_not_found'
  | 'analytics.groupings.name'
  | 'analytics.groupings.groups'
  | 'analytics.groupings.groups.add'
  | 'analytics.groupings.groups.delete'
  | 'analytics.groupings.groups.name'
  | 'analytics.groupings.groups.color'
  | 'analytics.groupings.groups.accounts'
  | 'analytics.groupings.groups.accounts.add'
  | 'analytics.groupings.groups.accounts.delete'
  | 'analytics.groupings.groups.accounts.failed_to_add'
  | 'analytics.groupings.groups.accounts.failed_to_delete'
  | 'analytics.groupings.groups.other'
  // Categories
  | 'categories.title'
  | 'categories.incomings'
  | 'categories.outgoings'
  | 'categories.no_data'
  | 'categories.new_category'
  | 'categories.incoming'
  | 'categories.outgoing'
  | 'categories.create_category'
  | 'categories.create_category_success'
  | 'categories.create_category_failure'
  | 'categories.edit_category'
  | 'categories.delete_category'
  | 'categories.delete_category_failure'
  | 'categories.delete_category_success'
  | 'categories.name'
  | 'categories.icon'
  // Groups
  | 'groups.title'
  | 'groups.create_group'
  | 'groups.name'
  | 'groups.edit_group_name'
  | 'groups.edit_group'
  | 'groups.users'
  | 'groups.add_user'
  | 'groups.failed_to_add_user'
  | 'groups.username'
  | 'groups.delete_user_confirm'
  | 'groups.delete_user_confirm_description'
  | 'groups.delete_user'
  | 'groups.failed_to_delete_user'
  | 'groups.delete_group'
  | 'groups.delete_group_confirm'
  | 'groups.delete_group_confirm_description'
  | 'groups.failed_to_delete_group'
  // Transactions
  | 'transactions.title'
  | 'transactions.create_transaction'
  | 'transactions.new_transaction'
  | 'transactions.incoming'
  | 'transactions.outgoing'
  | 'transactions.transfer'
  | 'transactions.from'
  | 'transactions.to'
  | 'transactions.account'
  | 'transactions.select_account'
  | 'transactions.account_is_required'
  | 'transactions.destination_account_is_required'
  | 'transactions.accounts_must_be_different'
  | 'transactions.date'
  | 'transactions.time'
  | 'transactions.dateTime'
  | 'transactions.amount'
  | 'transactions.category'
  | 'transactions.category_is_required'
  | 'transactions.comment'
  | 'transactions.tags'
  | 'transactions.create_transaction_success'
  | 'transactions.create_transaction_failure'
  | 'transactions.edit_transaction'
  | 'transactions.delete_transaction'
  | 'transactions.delete_transaction_success'
  | 'transactions.delete_transaction_failure'
  | 'transactions.feature_operations'
  | 'transactions.another_currency'
  | 'transactions.same_currency'
  // Transactions import
  | 'transactions.import'
  | 'transactions.import.title'
  | 'transactions.import.no_category'
  | 'transactions.import.invalid_expression'
  | 'transactions.import.set_category'
  | 'transactions.import.select_category_title'
  | 'transactions.import.select_category_multi_title'
  | 'transactions.import.apply'
  | 'transactions.import.category_applied'
  | 'transactions.import.select_category_for_all_operations'
  | 'transactions.import.finish'
  | 'transactions.import.finished'
  // Import rules
  | 'transactions.import.rules.title'
  | 'transactions.import.rules.create'
  | 'transactions.import.rules.edit_rule'
  | 'transactions.import.rules.how_does_it_work'
  | 'transactions.import.rules.how_does_it_work.description'
  | 'transactions.import.rules.condition'
  | 'transactions.import.rules.category'
  | 'transactions.import.rules.tags'
  | 'transactions.import.rules.category_or_tags_required'
  | 'transactions.import.rules.save_rule_success'
  | 'transactions.import.rules.save_rule_failure'
  | 'transactions.import.rules.delete'
  | 'transactions.import.rules.delete_success'
  | 'transactions.import.rules.delete_failure'
  // System
  | 'system.category.transfer_out'
  | 'system.category.transfer_in'
  // Currency rates
  | 'currency_rates.title'
  | 'currency_rates.default_currency'
  | 'currency_rates.new_currency_rate'
  | 'currency_rates.currency1'
  | 'currency_rates.currency2'
  | 'currency_rates.rate'
  | 'currency_rates.delete_currency_rate'
  | 'currency_rates.delete_currency_rate_success'
  | 'currency_rates.delete_currency_rate_failure'
  // Import and Export
  | 'import_export.title'
  | 'import_export.import'
  | 'import_export.export'
  | 'import_export.raw_data_json'
  | 'import_export.parse_data'
  | 'import_export.start_import'
  | 'import_export.uploading'
  | 'import_export.save'
  | 'import_export.other_features'
  | 'import_export.log_operations_keys'
  | 'import_export.categories'
  | 'import_export.account_tags'
  | 'import_export.accounts'
  | 'import_export.operation_tags'
  | 'import_export.operations'
  | 'import_export.currency_rates'
  | 'import_export.groupings'
  | 'import_export.nothing_to_import'
  | 'import_export.import_success'
  | 'import_export.import_failure'
  | 'import_export.operations_keys_logged'
  // Settings
  | 'settings.title'
  | 'settings.common'
  | 'settings.language'
  | 'settings.select_language'
  | 'settings.darkMode'
  | 'settings.theme'
  | 'settings.theme.light'
  | 'settings.theme.dark'
  | 'settings.theme.system'
  | 'settings.import_export'
  | 'settings.profile'
  | 'settings.profile.change_name'
  | 'settings.profile.change_name_failure'
  | 'settings.profile.change_login'
  | 'settings.profile.change_login_failure'
  | 'settings.profile.change_password'
  | 'settings.profile.change_password_success'
  | 'settings.profile.change_password_failure'
  | 'settings.profile.change_workspace'
  | 'settings.profile.change_workspace_failure'
  | 'settings.profile.logout'
  | 'settings.collaboration'
  | 'settings.collaboration.workspace'
  | 'settings.collaboration.workspaces'
  | 'settings.collaboration.invites'
  | 'settings.collaboration.blocklist'
  | 'settings.encryption'
  | 'settings.debug_tools'
  | 'settings.logs'
  | 'settings.logs.filters'
  | 'settings.logs.show_filters'
  | 'settings.logs.hide_filters'
  | 'settings.report_problem'
  | 'settings.version'
  | 'settings.uikit';

export type Dictionary = { [key in Messages]: string };

export type Locales = 'ru-RU' | 'en-US';
